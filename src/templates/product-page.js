import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import CategoryCards from "../components/cards";
import FullWidthImage from "../components/FullWidthImage";

export const ProductPageTemplate = ({
  title,
  categories,
  heroImage,
}) => {
  const heroImageData = getImage(heroImage) || heroImage;

  return (
    <div>
      {/* Hero Banner */}
      <FullWidthImage
        img={heroImageData}
        className="mb-[40px]"
      />
      
      {/* Products Section */}
      <div className="content">
        <div className="w-full py-[60px]">
          <h1 className="text-[32px] font-bold text-center mb-[40px]">{title}</h1>
          <CategoryCards categories={categories} />
        </div>
      </div>
    </div>
  );
};

ProductPageTemplate.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
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