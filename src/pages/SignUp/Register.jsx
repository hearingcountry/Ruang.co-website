import React from 'react';

const titlePage = {
  fontWeight: '500',
  fontSize: "48px",
  color: '#333333',
  letterSpacing: "0.005em",
};

const inputStyle = {
  width: '25em',
};

const registerBtn = {
  backgroundColor: "#736def",
  borderRadius: "5px",
  color: '#ffff',
  textAlign: "center",
  letterSpacing: "0.005em",
  fontSize: "20px",
  fontWeight: "500",
};

const googleBtnStyle = {
  background: '#FBFBFB',
};

const imageStyle = {
  width: '15em',
  height: 'auto',
};

function Register() {
  return (
    <div className="my-5">
      <p className="text-center" style={titlePage}>Let's Start New Journey</p>

      <form action="" className="mt-5 d-flex justify-content-center">
        <div className="row mx-3 mx-sm-5 mx-md-5 mx-lg-5">
          <div className="mb-3 d-flex justify-content-center">
            <div className="row">
              <label htmlFor="" className="form-label">First Name</label>
              <input type="text" className="form-control" style={inputStyle} required />
            </div>
          </div>
          <div className="mb-3 d-flex justify-content-center">
            <div className="row">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control" style={inputStyle} required />
            </div>
          </div>
          <div className="mb-3 d-flex justify-content-center">
            <div className="row">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" style={inputStyle} />
            </div>
          </div>
          <div className="mb-3 d-flex justify-content-center">
            <div className="row">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" style={inputStyle} required />
            </div>
          </div>
          <div className="mb-3 d-flex justify-content-center">
            <div className="row">
              <label className="form-label">Confirm Password</label>
              <input type="password" className="form-control" style={inputStyle} required />
            </div>
          </div>
          <div class="d-grid gap-2 col-6 mx-auto my-3">
            <button class="btn" type="button" style={registerBtn}>Create Account</button>
          </div>
          {/* <button type="submit" className="btn" style={registerBtn}>Create Account</button> */}
          <p className="text-center mt-3">or continue with</p>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn" type="button" style={googleBtnStyle}>
              <img className="p-1" alt="Google" src={require("../../assets/GoogleSignIn.png")} style={imageStyle} />
            </button>
          </div>
          {/* <button type="submit" className="btn w-100 d-flex justify-content-center" style={googleBtnStyle}>
            <img className="p-1" alt="Google" src={require("../../assets/GoogleSignIn.png")} style={imageStyle} />
          </button> */}
        </div>
      </form>
    </div>
  )
}

export default Register