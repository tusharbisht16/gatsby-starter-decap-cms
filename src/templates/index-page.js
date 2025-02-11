import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import FullScreenSlider from "../components/slider";
import CategoryCards from "../components/cards";
import RequirementsForm from "../components/form";
import SpinningContact from "../components/contactus";
import SingleCardSlider from "../components/simpleSLider";
import SingleSliderCard from "../components/singleSlider";
import { Link } from "gatsby";

export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
  info1,
  infoSubTitle,
  sliderImages = [], // Added default
  categories = [], // Added default
  testimonials = [], // Added default
}) => {
  // Process slider images with null check
  const processedSliderImages = (sliderImages || []).map((slide) => ({
    image: getImage(slide.url),
    alt: slide.alt,
  }));

  // Process category images with null check
  const processedCategories = (categories || []).map((category) => ({
    ...category,
    image: getImage(category.image),
  }));

  return (
    <div>
      <FullScreenSlider images={processedSliderImages} />
      <div className="text-center my-[60px] mx-[20px] lg:mx-[150px]">
    <p className="text-[35px] font-bold mb-[30px] " >

{info1}
    </p>
    <p className="text-[24px] font-semibold" >
    {infoSubTitle}
    </p>
      </div>
      <CategoryCards categories={processedCategories} />
      <div className="w-full flex justify-center mb-[30px] ">
      <Link 
              to="/products" 
              className=" px-6 py-3 bg-green-600 shadow-lg hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              View More
            </Link>

      </div>
     
      <SingleCardSlider primaryText="What Our Clients Says!" >
        {(testimonials || []).map((testimonial, index) => (
          <div key={index} className="p-[16px] lg:px-[12px] lg:py-[32px]">
            <SingleSliderCard
              userName={testimonial.userName}
              voc={testimonial.voc}
              rating ={testimonial.rating}
              index={index}
            />
          </div>
        ))}
      </SingleCardSlider>
      <RequirementsForm /> 
    </div>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  info1 :PropTypes.string,
  infoSubTitle :PropTypes.string,
  sliderImages: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.object,
      alt: PropTypes.string,
    })
  ),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.object,
      description: PropTypes.string,
    })
  ),
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string,
      voc: PropTypes.string,
      rating :PropTypes.number
    })
  ),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        info1 = {frontmatter.info1}
        infoSubTitle= {frontmatter.infoSubTitle} 
        subheading={frontmatter.subheading}
        sliderImages={frontmatter.sliderImages}
        categories={frontmatter.categories}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        info1
        infoSubTitle
        subheading
        sliderImages {
          url {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          alt
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
        testimonials {
          userName
          voc
          rating
        }
      }
    }
  }
`;