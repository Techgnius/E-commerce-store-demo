import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <div className="log-sign-scrn">
        <div className="Login-signup">
          <h1 className="log-sign-header">Log In</h1>
          <div className="main">
            <form onSubmit={() => handleSubmit()}>
              <span>
                <i className="fa-solid fa-user"></i>
                <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  id="email"
                  name="email"
                />
              </span>
              <br />
              <span>
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                />
              </span>
              <br />
              <button type="submit" value={password} className="log-sign-btn">
                Log In
              </button>
            </form>
          </div>
          <p className="propmt">
            Don't have an <span>account</span>? click the button below to signup
          </p>
          <button
            className="sign-log-btn"
            onClick={() => props.onFormswitch("Signup")}
            type="button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
