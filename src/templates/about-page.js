import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import HindaviHero from "../components/aboutUsSection2";
import FullWidthImage from "../components/FullWidthImage";
import { getImage } from "gatsby-plugin-image";
import RequirementsForm from "../components/form";
const heroProps = {
  heroImage: "../img/aboutUs.jpeg",
  title: "Why Choose Riddhi Siddhi?",
  paragraphs: [
    "Welcome to Riddhi Siddhi, a premier export company dedicated to delivering the finest farm-fresh agro products from India to the global market. With a commitment to quality, sustainability, and customer satisfaction, we specialize in offering a diverse range of agricultural products sourced directly from India's fertile lands. Our comprehensive product line includes a variety of fruits, vegetables, spices, grains, and other agricultural commodities that cater to the diverse needs of our international clientele.",
    "At Riddhi Siddhi, we are committed to building long-term relationships with our clients. Whether you are a wholesaler, retailer, or distributor, we are here to provide you with the best farm-fresh agro products from India. Contact us today to discuss your requirements and discover how we can cater to your needs with our high-quality offerings."
  ]
};

export const AboutPageTemplate = ({ title, content, contentComponent ,aboutUsLanding, info1,
  info2,
  infoSubTitle1,
  infoSubTitle2 }) => {
  const PageContent = contentComponent || Content;
  const heroImageData = getImage(aboutUsLanding) || aboutUsLanding;
  return (
    <div>
 <FullWidthImage
        img={heroImageData}
        className="md:mb-[40px]"
      />
       <section className="pt-16 bg-gradient-to-b from-gray-50">

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
<div className="text-center my-[60px] mx-[20px] lg:mx-[150px]">
    <p className="text-[22px] md:text-[32px] font-bold mb-[30px] " >
    {info1}
    </p>
    <p className="text-[16px] md:text-[24px] font-semibold" >
      {infoSubTitle1}
    </p>
      </div>

      <div className="text-center my-[60px] mx-[20px] lg:mx-[150px]">
    <p className="text-[22px] md:text-[32px] font-bold mb-[30px] " >
    {info2}
    </p>
    <p className="text-[16px] md:text-[24px] font-semibold" >
    {infoSubTitle2}
    </p>
      </div>
<RequirementsForm /> 
    </div>
   
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  info1: PropTypes.string,
  info2: PropTypes.string,
  infoSubTitle1: PropTypes.string,
  infoSubTitle2: PropTypes.string,
  content: PropTypes.string,
  aboutUsLanding: PropTypes.object,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        aboutUsLanding ={post.frontmatter.aboutUsLanding}
        info1={post.frontmatter.info1}
        info2={post.frontmatter.info2}
        infoSubTitle1={post.frontmatter.infoSubTitle1}
        infoSubTitle2={post.frontmatter.infoSubTitle2}
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
        info1
        info2
        infoSubTitle1
        infoSubTitle2
      aboutUsLanding {
          childImageSharp {
            gatsbyImageData(width: 1920, quality: 64, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;