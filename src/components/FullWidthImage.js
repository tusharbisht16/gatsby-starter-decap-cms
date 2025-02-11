import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function FullWidthImage(props) {
  const {
    height = 500,
    img,
    title,
    subheading,
    imgPosition = "top left",
  } = props;

  return (
    <div className="relative w-full" style={{ height }}>
      {img?.url ? (
        <img
          src={img.url}
          alt={title || "Featured image"}
          className="w-full h-auto lg:h-full object-cover"
          style={{
            objectPosition: imgPosition
          }}
        />
      ) : (
        <GatsbyImage
          image={img}
          alt={title || "Featured image"}
          className="w-full h-auto lg:h-full"
          style={{
            objectPosition: imgPosition
          }}
        />
      )}
      
      {(title || subheading) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
          <div className="container mx-auto px-4 text-center">
            {title && (
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {title}
              </h1>
            )}
            {subheading && (
              <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
                {subheading}
              </p>
            )}
          </div>
        </div>
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