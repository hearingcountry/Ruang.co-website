import React from 'react';
import FooterLogo from '../assets/LogoImages/FooterLogo.png';
import {
  ContentSide,
  Footer,
  Line,
  Logo,
  TitleSide
} from './FooterStyles';

function BottomFooter() {
  return (
    <>
      <footer className="pt-5 pb-4" style={Footer}>
        <div class="container pb-5">
          <div class="row">
            <div class="col-md-4">
              <img src={FooterLogo} alt="Footer Logo" style={Logo} className="d-flex mt-5 ms-md-0 ms-2" />
            </div>
            <div class="col-md-4 mt-md-0 mt-5 ms-md-0 ms-4 center-side">
              <div className="row" style={TitleSide}>Company</div>
              <div className="row mt-4" style={ContentSide}>APIs Developer</div>
              <div className="row my-2" style={ContentSide}>Carreer</div>
              <div className="row my-2" style={ContentSide}>Terms &amp; Conditions</div>
              <div className="row" style={ContentSide}>Privacy Policy</div>
            </div>
            <div class="col-md-4 mt-3 mt-md-0 ms-md-0 ms-4 right-side">
              <div className="row" style={TitleSide}>Be Our Friend</div>
              <div className="row mt-4" style={ContentSide}>101, Albert Park, Malang</div>
              <div className="row my-2" style={ContentSide}>support@ruang.co</div>
              <div className="row">021 - 1111 - 2222</div>
            </div>
          </div>
        </div>
        <hr style={Line} />
        <div className="bottom">
          <center>
            <span className="credit">All Rights Reserved 2022</span>
          </center>
        </div>
      </footer>
    </>
  );
};

export default BottomFooter;