import React from "react";
import PropTypes from "prop-types";
import { graphql, navigate } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import CategoryCards from "../components/cards";
import FullWidthImage from "../components/FullWidthImage";
import RequirementsForm from "../components/form";

export const ProductDetailTemplate = ({
  allCategories,
  productId,
  heroImage,
}) => {
  const heroImageData = getImage(heroImage) || heroImage;
  const processedCategories = (allCategories || []).map((category) => ({
    ...category,
    image: getImage(category.image),
  }));
  
  // Find the selected product based on ID
  const selectedProduct = processedCategories.find(category => category.id === productId);
  
  // Handler for when a product card is clicked
  const handleProductClick = (productId) => {
    // Navigate to the product detail page with path-based URL
    navigate(`/products/${productId}`);
  };
  
  // Handler to go back to all products
  const handleBackToProducts = () => {
  
    
    // OR Option 2: Go back but fall back to products page if there's no history
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/products/");
    }
  };
  
  return (
    <div>
      {selectedProduct ? (
        <>
          {/* Use product image as hero banner */}
          <div className="relative" >
            <FullWidthImage
              img={selectedProduct.image}
              className="md:mb-[40px]"
            />
            <button 
              onClick={handleBackToProducts}
              className="absolute top-4 left-4 px-4 py-2 bg-white hover:bg-gray-100 rounded-md transition-colors flex items-center shadow-md"
            >
              <span className="mr-1">←</span> Back
            </button>
          </div>
          
          {/* Product details */}
          <div className="max-w-7xl mx-auto px-4 mt-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">{selectedProduct.title}</h2>
            {selectedProduct.description && (
              <div className="text-gray-700 bg-white p-6 rounded-lg shadow-md mb-8">
                <p>{selectedProduct.description}</p>
              </div>
            )}
            
            
          </div>
        </>
      ) : (
        // Fallback if product not found
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <button 
            onClick={handleBackToProducts}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
          >
            Back to Products
          </button>
        </div>
      )}
      
      {/* Always show category cards */}
      <div className="content">
        <div className="w-full lg:py-[40px]">
          <CategoryCards 
            categories={processedCategories} 
            onProductClick={handleProductClick}
          />
        </div>
      </div>
      <RequirementsForm /> 
    </div>
  );
};

ProductDetailTemplate.propTypes = {
  allCategories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.object,
      description: PropTypes.string,
    })
  ),
  productId: PropTypes.string,
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const ProductDetailPage = ({ data, pageContext }) => {
  const { categories, productHeroImage } = data.indexPage.frontmatter;
  const { productId } = pageContext;

  return (
    <Layout>
      <ProductDetailTemplate
        allCategories={categories}
        productId={productId}
        heroImage={productHeroImage}
      />
    </Layout>
  );
};

ProductDetailPage.propTypes = {
  data: PropTypes.shape({
    indexPage: PropTypes.shape({
      frontmatter: PropTypes.shape({
        categories: PropTypes.array,
        productHeroImage: PropTypes.object,
      }),
    }),
  }),
  pageContext: PropTypes.shape({
    productId: PropTypes.string,
  }),
};

export default ProductDetailPage;

export const productDetailQuery = graphql`
  query ProductDetailPage {
    indexPage: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
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
              gatsbyImageData(width: 1920, quality: 64, layout: CONSTRAINED)
            }
          }
          description
        }
      }
    }
  }
`;