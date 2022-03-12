import React from 'react';

const titleStyle = {
  color: "#333333",
  fontWeight: '500',
  fontSize: '48px',
  letterSpacing: '0.005em'
};

const descStyle = {
  fontSize: '24px',
  fontWeight: '400',
  letterSpacing: '0.005em',
  color: "#656565"
};

const loginBtnStyle = {
  background: '#736DEF',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '20px',
  fontWeight: '500',
  letterSpacing: '0.005em'
};

const googleBtnStyle = {
  background: '#FBFBFB',
  borderRadius: '5px',
};

const imageStyle = {
  width: '15em',
  height: 'auto',
};

const loginPageStyle = {
  marginTop: '8em',
  marginBottom: '20em',
};

const Login = () => {
  return (
    <div className="" style={loginPageStyle}>
      <div className="container">
        <div className="row">
          <div className="col">
            <p style={titleStyle}>Sign In to Find the Best Coworking Space</p>
            <p style={descStyle}>Many choices are available just for you as a <br />
              medium from us to simplify your lifestyle <br />
              very cheaply and easily</p>
          </div>

          <div className="col">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="btn w-100 p-2"
                style={loginBtnStyle}
              >Sign In</button>

              <p className="text-center mt-3">or continue with</p>
              <button type="submit" className="btn w-100 d-flex justify-content-center btn-lg" style={googleBtnStyle}>
                <img className="p-1" alt="Google" src={require("../../assets/GoogleSignIn.png")} style={imageStyle} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;