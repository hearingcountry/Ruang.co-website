import React from 'react';
import { FirstFrame, SecondFrame } from '../CardContents';
import {
  inputSearch, CardTitles, CardLocations,
  CardRatings, ReviewCounts, Price,
  btnBookNow, btnSearch, browseTitle, popularTitle
} from '../BrowseStyles';

function Lowokwaru() {
  return (
    <>
      <div className="input-group d-flex w-50 mx-auto d-block mt-5">
        <input type="text" className="form-control input-search" placeholder="Search City or Space"
          aria-label="Search" style={inputSearch} />
        <button className="btn text-white" id="search-btn" style={btnSearch}>Search</button>
      </div>
      <p className="text-center my-5" style={browseTitle}>There Are 3 Places in Lowokwaru</p>
      {FirstFrame.map((cardData, id) => (
        <div className="d-flex justify-content-center" key={id} id="frame1">
          <div className="card mb-5 mx-3 mx-md-0" style={{ width: "1300px", background: '#FAFAFA' }}>
            <div className="row no-gutters">
              <div className="col-lg-6 col-sm-5">
                <img src={cardData.cardImage} alt="" className="p-lg-5 card-img" />
              </div>
              <div className="col-lg-6 col-sm-7">
                <div className="card-body ms-lg-5 mt-lg-5">
                  <div className="card-title" style={CardTitles}>{cardData.cardTitle}</div>
                  <div className="card-text" style={CardLocations}>{cardData.location}</div>
                  <img src={cardData.rating} alt="" style={CardRatings} />
                  <span className="ps-2 pt-1" style={ReviewCounts}>{cardData.reviewCounts}</span>
                  <p style={Price}>{cardData.price}</p>
                  <button className="btn text-white" style={btnBookNow}>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <p className="text-center my-5" style={popularTitle}>Recommended Place for You</p>
      {SecondFrame.map((cardData, id) => (
        <div className="d-flex justify-content-center" key={id} id="frame2">
          <div className="card mb-5 mx-3 mx-md-0" style={{ width: "1300px", background: '#FAFAFA', }}>
            <div className="row no-gutters">
              <div className="col-lg-6 col-sm-5">
                <img src={cardData.cardImage} alt="" className="p-lg-5 card-img" />
              </div>
              <div className="col-lg-6 col-sm-7">
                <div className="card-body ms-lg-5 mt-lg-5">
                  <div className="card-title" style={CardTitles}>{cardData.cardTitle}</div>
                  <div className="card-text" style={CardLocations}>{cardData.location}</div>
                  <img src={cardData.rating} alt="" style={CardRatings} />
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

export default Lowokwaru