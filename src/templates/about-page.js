import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import HindaviHero from "../components/aboutUsSection2";
const heroProps = {
  heroImage: "../img/aboutUs.jpeg",
  title: "Why Choose Riddhi Siddhi?",
  paragraphs: [
    "Welcome to Riddhi Siddhi, a premier export company dedicated to delivering the finest farm-fresh agro products from India to the global market. With a commitment to quality, sustainability, and customer satisfaction, we specialize in offering a diverse range of agricultural products sourced directly from India's fertile lands. Our comprehensive product line includes a variety of fruits, vegetables, spices, grains, and other agricultural commodities that cater to the diverse needs of our international clientele.",
    "At Riddhi Siddhi, we are committed to building long-term relationships with our clients. Whether you are a wholesaler, retailer, or distributor, we are here to provide you with the best farm-fresh agro products from India. Contact us today to discuss your requirements and discover how we can cater to your needs with our high-quality offerings."
  ]
};

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="py-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {title}
              </h2>
              <PageContent className="prose max-w-none" content={content} />
              
            </div>
          </div>
        </div>
      </div>
      <HindaviHero  {...heroProps}/>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;