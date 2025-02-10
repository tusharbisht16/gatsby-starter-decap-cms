
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import styles from "./index.module.css";

// Custom Previous Button
const PrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        left: "-100px",
        top: "50%",
        transform: "translateY(-50%)",
        background: "#FDFDFD",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        padding: "22px",
        zIndex: 2,
        border: "1px solid #78787D3D",
      }}
    >
      <IoIosArrowRoundBack size={24} />
    </button>
  );
};

// Custom Next Button
const NextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        right: "-100px",
        top: "50%",
        transform: "translateY(-50%)",
        background: "#1A1A1A",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        padding: "22px",
        zIndex: 2,
      }}
    >
      <IoIosArrowRoundForward size={24} color="#FDFDFD" />
    </button>
  );
};

const SingleCardSlider = ({
  children,
  primaryText = "",
  secondaryText = "",
  textCenter = false,
}) => {
  const [windowWidth, setWindowWidth] = useState(0);

  // Custom Dots Component
  const CustomDots = ({ dots }) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "60px",
          marginTop:'-6px'
        }}
      >
        {dots.map((dot, index) => (
          <button
            key={index}
            onClick={dot.props.children.props.onClick}
            style={{
              height: windowWidth <= 1024 ? "12px" : "16px",
              width: windowWidth <= 1024 ? "12px" : "16px",
              margin: "0 5px",
              borderRadius: "50%",
              backgroundColor: dot.props.className.includes("slick-active")
                ? "#1A1A1A"
                : "#EAEAEA",
              border: "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth <= 1070? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: windowWidth <= 600 ? false : true,
    appendDots: (dots) => <CustomDots dots={dots} />, // Use the custom dots component
  };

  useEffect(() => {
    // Check if window is defined (runs only on the client side)
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const width = document.documentElement.clientWidth;
        setWindowWidth(width);
      };

      // Set the initial width
      handleResize();

      // Update width on resize
      window.addEventListener("resize", handleResize);

      // Cleanup event listener on unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div
      className="slider-container  mx-auto lg:max-w-[1440px] p-[16px] sm:px-[150px]  lg:px-[150px]   xl:px-[230px]  "
      style={{
        // width: windowWidth <= 1024 ? "100%" : "82%",
      }}
    >
      <div className="flex text-[32px] mt-[8px] flex-col items-start sm:items-center font-bold justify-center ">
       {primaryText}

        <div className={`mt-[8px]`}>
{secondaryText} 
        </div>
      </div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default SingleCardSlider;
