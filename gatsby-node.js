const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // First, get all markdown pages
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    result.errors.forEach((e) => console.error(e.toString()))
    return Promise.reject(result.errors)
  }

  const posts = result.data.allMarkdownRemark.edges

  // Create pages for each markdown file
  posts.forEach((edge) => {
    const id = edge.node.id
    createPage({
      path: edge.node.fields.slug,
      tags: edge.node.frontmatter.tags,
      component: path.resolve(
        `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
      ),
      // additional data can be passed via context
      context: {
        id,
      },
    })
  })

  // Tag pages:
  let tags = []
  // Iterate through each post, putting all found tags into `tags`
  posts.forEach((edge) => {
    if (_.get(edge, `node.frontmatter.tags`)) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })
  // Eliminate duplicate tags
  tags = _.uniq(tags)

  // Make tag pages
  tags.forEach((tag) => {
    const tagPath = `/tags/${_.kebabCase(tag)}/`

    createPage({
      path: tagPath,
      component: path.resolve(`src/templates/tags.js`),
      context: {
        tag,
      },
    })
  })

  // Create product detail pages
  // First, query for product categories
  const productResult = await graphql(`
    {
      indexPage: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          categories {
            id
            title
          }
        }
      }
    }
  `)

  if (!productResult.errors && productResult.data.indexPage) {
    const categories = productResult.data.indexPage.frontmatter.categories;
    
    // Create a products landing page if it doesn't already exist in markdown
    const productPageExists = posts.some(
      (edge) => edge.node.fields.slug === '/products/'
    );
    
    if (!productPageExists) {
      createPage({
        path: '/products',
        component: path.resolve('./src/templates/product-page.js'),
        context: {},
      });
    }
    
    // Create individual product pages
    if (categories && categories.length > 0) {
      categories.forEach((category) => {
        createPage({
          path: `/products/${category.id}`,
          component: path.resolve('./src/templates/product-detail.js'),
          context: {
            productId: category.id,
          },
        });
      });
    }
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}