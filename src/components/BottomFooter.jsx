import React from 'react';
import FooterLogo from '../assets/LogoImages/FooterLogo.png'

function BottomFooter() {
  return (
    <>
      <footer className="pt-5 pb-4" style={{
        background: '#010015',
        color: '#fff'
      }}>
        <div class="container">
          <div class="row">
            <div class="col">
              <img
                src={FooterLogo}
                alt="Footer Logo"
                style={{
                  height: '50px',
                  width: '200px'
                }}
                className="d-flex mt-5"
              />
            </div>
            <div class="col">
              <div className="row">Company</div>
              <div className="row mt-4">APIs Developer</div>
              <div className="row my-2">Carreer</div>
              <div className="row my-2">Terms &amp; Conditions</div>
              <div className="row">Privacy Policy</div>
            </div>
            <div class="col">
              <div className="row">Be Our Friend</div>
              <div className="row  mt-4">101, Albert Park, Malang</div>
              <div className="row my-2">support@ruang.co</div>
              <div className="row">021 - 1111 - 2222</div>
            </div>
          </div>
        </div>
        {/* <div class="container">
          <div class="d-flex flex-row">
            <div class="col">
              <img
                src={FooterLogo}
                alt="Footer Logo"
                style={{
                  height: '50px',
                  width: '200px'
                }}
                className="d-flex mt-5"
              />
            </div>
            <div class="col ml-5 mt-1 mb-2">
              <div className="row">Company</div>
              <div className="row mt-4">APIs Developer</div>
              <div className="row my-2">Carreer</div>
              <div className="row my-2">Terms &amp; Conditions</div>
              <div className="row">Privacy Policy</div>
            </div>
            <div class="col ml-5 mt-1 mb-2">
              <div className="row">Be Our Friend</div>
              <div className="row  mt-4">101, Albert Park, Malang</div>
              <div className="row my-2">support@ruang.co</div>
              <div className="row">021 - 1111 - 2222</div>
            </div>
          </div>
        </div> */}

        <hr style={{ backgroundColor: '#ffffff' }} />
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