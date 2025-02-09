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

export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
  sliderImages,
  categories,
  testimonials,
}) => {
  // Process slider images
  const processedSliderImages = sliderImages.map((slide) => ({
    image: getImage(slide.url), // Convert File node to GatsbyImageData
    alt: slide.alt,
  }));

  // Process category images
  const processedCategories = categories.map((category) => ({
    ...category,
    image: getImage(category.image), // Convert File node to GatsbyImageData
  }));

  return (
    <div>
      <FullScreenSlider images={processedSliderImages} />
      <CategoryCards categories={processedCategories} />
      <RequirementsForm />
      <SpinningContact />
      <SingleCardSlider>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-[16px] lg:px-[12px] lg:py-[32px]">
            <SingleSliderCard
              userName={testimonial.userName}
              voc={testimonial.voc}
              index={index}
            />
          </div>
        ))}
      </SingleCardSlider>
    </div>
  );
};

// Update PropTypes to reflect GatsbyImageData usage
IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  sliderImages: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.object, // Now expecting a File node instead of string
      alt: PropTypes.string,
    })
  ),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.object, // File node
      description: PropTypes.string,
    })
  ),
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string,
      voc: PropTypes.string,
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
        }
      }
    }
  }
`;