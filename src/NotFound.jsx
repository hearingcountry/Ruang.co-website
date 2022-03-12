import React from 'react';
import { Link } from 'react-router-dom';
import BrokenRobot from './assets/brokenRobot.jpg';

const Text = {
  fontWeight: '500',
  letterSpacing: '0.005em',
  color: '#333333',
  fontSize: '30px'
};

export default function NotFound() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={BrokenRobot} alt="" className="img-fluid mx-auto d-block my-5" />
          </div>
          <div className="col d-flex align-items-center">
            <p style={Text}>404 Error<br /> Not Found <br /> Please <Link to="/">go back to homepage</Link></p>
          </div>
        </div>
      </div>

    </>
  )
}
