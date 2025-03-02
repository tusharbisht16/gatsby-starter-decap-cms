import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PrivacyPolicyAccordion from "../components/privacyPolicyAccordian";
import RequirementsForm from "../components/form";


export const PoliciesPageTemplate = ({ title, description, policies }) => {
  return (
    <>
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">{title}</h1>
      {description && (
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-center text-gray-700">{description}</p>
        </div>
      )}
      
      <div className="max-w-4xl mx-auto">
        <PrivacyPolicyAccordion privacyData={policies} />
      </div>
     
    </div>
    <RequirementsForm /> 
    </>
    
  );
};

PoliciesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  policies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.shape({
        mainText: PropTypes.string.isRequired,
        subSections: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string.isRequired,
            items: PropTypes.arrayOf(PropTypes.string)
          })
        )
      }).isRequired
    })
  ).isRequired
};

const PoliciesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <PoliciesPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        policies={frontmatter.policies}
      />
    </Layout>
  );
};

PoliciesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default PoliciesPage;

export const policiesPageQuery = graphql`
  query PoliciesPage {
    markdownRemark(frontmatter: { templateKey: { eq: "policies-page" } }) {
      frontmatter {
        title
        description
        policies {
          id
          title
          content {
            mainText
            subSections {
              title
              items
            }
          }
        }
      }
    }
  }
`;