import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardContent } from './CardContents';
import SlideOne from "../../assets/SliderImage/pict1.png";
import SlideTwo from '../../assets/SliderImage/pict2.png';
import SlideThree from '../../assets/SliderImage/pict3.png';
import {
  inputSearch, btnSearch,
  browseTitle, popularTitle,
  CardTitles, CardLocations,
  CardRatings, ReviewCounts,
  Price, btnBookNow
} from './BrowseStyles';

function BrowsePage() {
  const settings = {
    arrows: true,
    className: "carousel",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };

  return (
    <>
      <div className="input-group d-flex w-50 mx-auto d-block mt-5">
        <input type="text" className="form-control" placeholder="Search City or Space"
          aria-label="Search" style={inputSearch} />
        <button className="btn text-white" style={btnSearch}>Search</button>
      </div>
      <p className="text-center my-5" style={browseTitle}>Discover Best Coworking Space <br /> Around You</p>
      <div id="slide">
        <Slider {...settings}>
          <div className="slide1">
            <Link to="/browse/lowokwaru-list">
              <img src={SlideOne} className="d-block w-100" alt="Slide" />
            </Link>
          </div>
          <div className="slide2">
            <Link to="/browse/klojen-list">
              <img src={SlideTwo} className="d-block w-100" alt="Slide" />
            </Link>
          </div>
          <div className="slide3">
            <Link to="/browse/sukun-list">
              <img src={SlideThree} className="d-block w-100" alt="Slide" />
            </Link>
          </div>
          <div className="slide1">
            <Link to="/browse/lowokwaru-list">
              <img src={SlideOne} className="d-block w-100" alt="Slide" />
            </Link>
          </div>
          <div className="slide2">
            <Link to="/browse/klojen-list">
              <img src={SlideTwo} className="d-block w-100" alt="Slide" />
            </Link>
          </div>
          <div className="slide3">
            <Link to="/browse/sukun-list">
              <img src={SlideThree} className="d-block w-100" alt="Slide" />
            </Link>
          </div>
        </Slider>
      </div>
      <p className="text-center my-5" style={popularTitle}>Popular Coworking Space</p>
      {CardContent.map((cardData, id) => (
        <div className="d-flex justify-content-center" key={id} id="popular-card">
          <div className="card mb-5 mx-3 mx-md-0" style={{ width: "1300px", background: '#FAFAFA' }}>
            <div className="row no-gutters">
              <div className="col-lg-6 col-sm-5">
                <img src={cardData.imgPath} alt="" className="p-lg-5 card-img" />
              </div>
              <div className="col-lg-6 col-sm-7">
                <div className="card-body ms-lg-5 mt-lg-5">
                  <div className="card-title" style={CardTitles}>{cardData.title}</div>
                  <div className="card-text" style={CardLocations}>{cardData.location}</div>
                  <img src={cardData.rating} alt="Rating stars" style={CardRatings} />
                  <span className="ps-2 pt-1" style={ReviewCounts}>{cardData.reviewCounts}</span>
                  <p style={Price}>{cardData.price}</p>
                  <button className="btn text-white" style={btnBookNow}>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default BrowsePage