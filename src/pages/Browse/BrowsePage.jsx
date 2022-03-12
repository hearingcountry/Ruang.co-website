import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SlideOne from "../../assets/SliderImage/pict1.png";
import SlideTwo from '../../assets/SliderImage/pict2.png';
import SlideThree from '../../assets/SliderImage/pict3.png';

import { CardContent } from './CardContents';

function BrowsePage() {
  return (
    <>
      <div className="input-group d-flex w-50 mx-auto d-block mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Search City or Space"
          aria-label="Search"
          style={{
            backgroundColor: '#fff',
            border: '1px solid #dadae6',
            borderRadius: '5px',
            color: '#c4c4c4',
            fontWeight: '400',
            fontSize: '16px',
            letterSpacing: '0.005em',
            height: '50px'
          }}
        />
        <button className="btn" style={{
          background: '#736def',
          borderRadius: '0px 5px 5px 5px 0px',
          color: "#fff",
          letterSpacing: '0.005em',
          fontSize: '24px',
          fontWeight: '500'
        }}>Search</button>
      </div>

      <p className="text-center my-5" style={{
        color: '#333333',
        letterSpacing: '0.005em',
        fontWeight: '500',
        fontSize: '48px'
      }}>Discover Best Coworking Space <br /> Around You </p>

      <div className="d-flex justify-content-center">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div className="carousel-item active">
              <Link to="/browse/lowokwaru">
                <img src={SlideOne} className="d-block img-fluid" alt="" style={{
                  width: '700px',
                }} />
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/browse/klojen">
                <img src={SlideTwo} className="d-block img-fluid" alt="" style={{
                  width: '700px',
                }} />
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/browse/sukun">
                <img src={SlideThree} className="d-block img-fluid" alt="" style={{
                  width: '700px'
                }} />
              </Link>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <p className="text-center my-5" style={{
        color: '#333333',
        letterSpacing: '0.005em',
        fontWeight: '500',
        fontSize: '48px'
      }}>Popular Coworking Space</p>

      {CardContent.map((item, id) => (
        <div key={id} className="mb-5 container-fluid d-flex justify-content-center align-items-center">
          <div id="cards" className="d-flex justify-content-center w-100" style={{
            background: '#FAFAFA',
            width: '100%',
            height: '376px'
          }}>
            <div className="row">
              <div className="col-md-6">
                <img src={item.imgPath} alt="" className="img-fluid" />
              </div>

              <div className="col-md-6">
                <p className="card-title mt-2" style={{
                  color: "#333333",
                  letterSpacing: "0.005em",
                  fontSize: "32px",
                  fontWeight: "500"
                }}>{item.title}</p>

                <p style={{
                  color: "#656565",
                  letterSpacing: "0.005em",
                  fontSize: "24px",
                  fontWeight: "500"
                }}>{item.location}</p>

                <img
                  src={item.rating}
                  alt="Rating and Review Counts"
                  style={{
                    width: '10em',
                    height: '2em',
                  }}
                />

                <span className="ps-2 pt-1" style={{
                  color: '#656565',
                  fontSize: '16px',
                  fontWeight: '500',
                  letterSpacing: "0.005em",
                }}>{item.reviewCounts}</span>

                <p style={{
                  color: "#FF6E43",
                  letterSpacing: "0.005em",
                  fontSize: "40px",
                  fontWeight: "500"
                }}>{item.price}</p>

                <button className="btn" style={{
                  background: '#736DEF',
                  borderRadius: '5px',
                  color: '#fff',
                  fontWeight: "500",
                  fontSize: "20px",
                  letterSpacing: "0.005em",
                  padding: '8px',
                  width: '448px',
                  height: '44px'
                }}>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default BrowsePage