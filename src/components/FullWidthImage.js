import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function FullWidthImage(props) {
  const {
   
    img,
    title,
    subheading,
    imgPosition = "top left",
  } = props;

  return (
    <div className="relative w-full lg:max-h-full" >
      {img?.url ? (
        <img
          src={img.url}
          alt={title || "Featured image"}
          className="w-full h-auto  object-cover"
          style={{
            objectPosition: imgPosition
          }}
        />
      ) : (
        <GatsbyImage
          image={img}
          alt={title || "Featured image"}
          className="w-full h-auto "
          style={{
            objectPosition: imgPosition
          }}
        />
      )}
      
      
    </div>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};