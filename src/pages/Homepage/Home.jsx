import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Pict1 from '../../assets/HomeImages/unsplash.png';
import Steps from '../../assets/HomeImages/Steps.png';
import Gallery1 from '../../assets/HomeImages/gallery1.png';
import Gallery2 from '../../assets/HomeImages/Gallery2.png';
import Gallery3 from '../../assets/HomeImages/Gallery3.png';
import Gallery4 from '../../assets/HomeImages/Gallery4.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  buttonSearch, inputSearch, pictSection1,
  titleSection1, descSection1, titleSection3,
  descSection3, containerSection4, titleSection4,
  descSection4, exploreMoreBtn, titleLastSection,
  descLastSection, registerBtn, thirdSection,
  lastSection
} from './HomeStyles';

function Home() {
  const settings = {
    adaptiveHeight: true,
    arrows: true,
    className: "carousel",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
  };

  return (
    <>
      {/* First Section */}
      <div className="container mb-5">
        <div className="row">
          <div className="col mt-5 ">
            <div className="row">
              <p className="" style={titleSection1}>Find The Best Place for Your Work</p>
            </div>

            <div className="row">
              <p style={descSection1} className="">We offer inspiring spaces with inviting design, flexible environment, and genuene experience</p>
            </div>
            <div className="row">
              <div className="input-group d-flex">
                <input
                  type="text"
                  className="form-control w-50"
                  placeholder="Search City or Space"
                  aria-label="Search"
                  style={inputSearch}
                />
                <button className="btn" style={buttonSearch}>Search</button>
              </div>
            </div>
          </div>

          <div className="col mt-5">
            <img src={Pict1} className="d-none d-lg-inline" alt="" style={pictSection1} />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div id="section2">
        <img src={require('../../assets/HomeImages/Section2.png')} alt="" className="img-fluid my-5 mx-auto d-block" />
      </div>

      {/* Section 3 */}
      <div className="pb-5" style={thirdSection} id="section3">
        <p
          className="text-center pt-5 fw-normal"
          style={titleSection3}
        >How It works</p>
        <p className="text-center pt-2 pb-5" style={descSection3}>We prepare the best choice of places with high <br /> quality that is guaranteed by the hotel <br /> assessment agency.</p>
        <img src={Steps} alt="Steps" className="justify-content-center px-5 img-fluid" />
      </div>

      {/* Section 4 */}
      <div className="container" style={containerSection4}>
        <div className="row">
          <div className="col-md-6">
            <div className="ms-3">
              <p style={titleSection4}>Find your best <br /> coworking space</p>
            </div>

            <div className="py-3 ms-3">
              <p style={descSection4}>We are sure you can find the <br /> best place according to <br /> your preferences</p>
            </div>

            <div className="ms-3">
              <Link to="/browse">
                <button className="btn text-center" style={exploreMoreBtn}>Explore More</button>
              </Link>
            </div>
          </div>
          <div className="col-md-6 mt-md-3 mt-5">
            <Slider {...settings}>
              <div className="" style={{ width: 350 }}>
                <Link to="/browse/lowokwaru-list">
                  <img src={require("../../assets/SliderImage/pict1.png")} className="d-block w-100" alt="..." />
                </Link>
              </div>
              <div className="" style={{ width: 350 }}>
                <Link to="/browse/klojen-list">
                  <img src={require("../../assets/SliderImage/pict2.png")} className="d-block w-100" alt="..." />
                </Link>
              </div>
              <div className="" style={{ width: 350 }}>
                <Link to="/browse/sukun-list">
                  <img src={require("../../assets/SliderImage/pict3.png")} className="d-block w-100" alt="..." />
                </Link>
              </div>
              <div className="" style={{ width: 350 }}>
                <Link to="/browse/lowokwaru-list">
                  <img src={require("../../assets/SliderImage/pict1.png")} className="d-block w-100" alt="..." />
                </Link>
              </div>
              <div className="" style={{ width: 350 }}>
                <Link to="/browse/klojen-list">
                  <img src={require("../../assets/SliderImage/pict2.png")} className="d-block w-100" alt="..." />
                </Link>
              </div>
              <div className="" style={{ width: 350 }}>
                <Link to="/browse/sukun-list">
                  <img src={require("../../assets/SliderImage/pict3.png")} className="d-block w-100" alt="..." />
                </Link>
              </div>
              <div className="" style={{ width: 350 }}>
                <Link to="/browse/lowokwaru-list">
                  <img src={require("../../assets/SliderImage/pict1.png")} className="d-block w-100" alt="..." />
                </Link>
              </div>
              <div className="" style={{ width: 350 }}>
                <Link to="/browse/klojen-list">
                  <img src={require("../../assets/SliderImage/pict2.png")} className="d-block w-100" alt="..." />
                </Link>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      {/* Last Section */}
      <div className="pb-5" style={lastSection}>
        <p className="text-center pt-5 fw-normal" style={titleLastSection}>Come on, feel yourself <br /> to be a part of us</p>
        <p className="text-center pt-2 pb-2" style={descLastSection}>Let's feel yourself being a part of us being a partner and get a big and <br />
          attractive promo from us as a sign we love you</p>

        <div className="d-flex justify-content-center">
          <Link to="/register" className="text-decoration-none">
            <button className="btn btn-default align-items-center" style={registerBtn}>Register</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;