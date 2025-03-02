import React from "react";
import PropTypes from "prop-types";
import { graphql, navigate } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import CategoryCards from "../components/cards";
import FullWidthImage from "../components/FullWidthImage";
import RequirementsForm from "../components/form";

export const ProductPageTemplate = ({
  title,
  categories,
  heroImage,
}) => {
  const heroImageData = getImage(heroImage) || heroImage;
  const processedCategories = (categories || []).map((category) => ({
    ...category,
    image: getImage(category.image),
  }));
  
  // Handler for when a product card is clicked
  const handleProductClick = (productId) => {
    // Navigate to the product detail page with path-based URL
    navigate(`/products/${productId}`);
  };
  
  return (
    <div>
      {/* Hero Banner */}
      <FullWidthImage
        img={heroImageData}
        className="md:mb-[40px]"
      />
      
      {/* Products Section */}
      <div className="content">
        <div className="w-full lg:py-[40px]">
          {/* Category cards with click handlers */}
          <CategoryCards 
            categories={processedCategories} 
            onProductClick={handleProductClick}
            showAll = {true}
          />
        </div>
      </div>
      <RequirementsForm /> 
    </div>
  );
};

ProductPageTemplate.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.object,
      description: PropTypes.string,
    })
  ),
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const ProductPage = ({ data }) => {
  const { title, categories, productHeroImage } = data.indexPage.frontmatter;

  return (
    <Layout>
      <ProductPageTemplate
        title={title}
        categories={categories}
        heroImage={productHeroImage}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    indexPage: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        categories: PropTypes.array,
        productHeroImage: PropTypes.object,
      }),
    }),
  }),
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage {
    indexPage: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        productHeroImage {
          childImageSharp {
            gatsbyImageData(width: 1920, quality: 64, layout: FULL_WIDTH)
          }
        }
        categories {
          id
          title
          image {
            childImageSharp {
              gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
            }
          }
          description
        }
      }
    }
  }
`;