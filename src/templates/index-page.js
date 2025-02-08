import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

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
  return (
    <div>
      <FullScreenSlider images={sliderImages} />
      
      <CategoryCards categories={categories} />
      
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

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  sliderImages: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
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

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
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
          url
          alt
        }
        categories {
          title
          image
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