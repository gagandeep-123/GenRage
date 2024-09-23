import React from 'react'
import "./index.scss"
import Slider from "react-slick";

const Design = () => {
    const settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 1200,
    //   cssEase: "linear",
      arrows: false,
    };
  return (
    <div className="design-wrapper">
      <div className="left">
        <div className="slider-overlay">
          <Slider {...settings}>
            {["./drawing2.png", "./drawing2.png", "./drawing2.png"].map(
              (item) => {
                return (
                  <div
                    className="card-wrapper"
                    style={{ backgroundImage: 'url("./whitetee.png")' }}
                  >
                    {/* <img style={{width : "300px", backgroundAttachment:"fixed"}} src='./whitetee.png'></img> */}
                    <div className="inner-wrapper">
                      <img
                        className="image4"
                        style={{ width: "100px" }}
                        src={item}
                      ></img>
                    </div>
                  </div>
                );
              }
            )}
          </Slider>
        </div>
      </div>

      <div className="right">
        <div className="heading">
          Easily add your designs to a wide range of products.
        </div>
        <p>
          With our free design tools, you can easily add your custom designs to
          t-shirts, mugs, phone cases, and hundreds of other products.
        </p>
        <div style={{ fontWeight: "600", color: "green", fontSize: "18px" }}>
          Choose your design
        </div>
      </div>
    </div>
  );
}

export default Design