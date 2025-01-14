import React from "react";
import PropTypes from "prop-types";
import {  graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

import FullWidthImage from "../components/FullWidthImage";
import FullScreenSlider from "../components/slider";
import CategoryCards from "../components/cards";
import RequirementsForm from "../components/form";
import SpinningContact from "../components/contactus";
import RequirementsForm2 from "../components/form2";
import SingleCardSlider from "../components/simpleSLider";
import SingleSliderCard from "../components/singleSlider";
const cards = [
  {
    userName: "Ady@money",
    voc: "Tata Neu is my everyday app for all my needs. Right from the UPI payments to groceries to clothes and toys. It’s one of the super apps that anybody can use with ease.",
  },
  // {
  //   userName: "yeaufskgzkgz",
  //   voc: "Easy to use the app. Shopping experience is awesome. Bill payments too quick & easy.",
  // },
  {
    userName: "Hakeem Jease",
    voc: "Bill Payments convents fees no I am very happy 👍",
  },
  {
    userName: "Parag VH",
    voc: "The bill payments option is pretty smooth compared to the competition. It’s just 2 step process when you get your notifications automatically. Very well executed.",
  },
  {
    userName: "Sai Sarvesh",
    voc: "Good to use for UPI payments.",
  },
  {
    userName: "Subramanyam Kshatriya",
    voc: "One of the best for all in one bill payments and I really like your services and most important your understanding each customer's issues. Thank you but small suggestion for you, you should improve your services to attract customers. Thank you.",
  },
  {
    userName: "Shubham Shirke",
    voc: "Simple, Easy and Quick way for bills, Payments & Shopping's. Really enjoying it.",
  },
  {
    userName: "Durgesh Nadkarni",
    voc: "Fantastic experience using this.. Smooth payments plus good rewards on payments.",
  },
  {
    userName: "Vaibhav Wankhade",
    voc: "Good for online bill payments.",
  },
];
// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      {/* <FullWidthImage img={heroImage} title={title} subheading={subheading} /> */}
      
      <FullScreenSlider />
     
      <CategoryCards/>
      <RequirementsForm />
      <SpinningContact/>
      <SingleCardSlider>
      {cards.map((card, index) => (
                <div key={index} className="p-[16px] lg:px-[12px] lg:py-[32px]">
                  <SingleSliderCard
                    userName={card.userName}
                    voc={card.voc}
                    key={index}
                    index={index}
                  />
                </div>
              ))}
      </SingleCardSlider>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
