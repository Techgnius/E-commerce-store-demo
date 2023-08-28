import React from "react";
import { useState } from "react";

const Signup = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <div className="log-sign-scrn">
        <div className="overlay"></div>
        <div className="Login-signup" data-aos="fade-down">
          <h1 className="log-sign-header">Sign Up</h1>
          <div className="main">
            <form onSubmit={() => handleSubmit()}>
              <span>
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  // value={name}
                  placeholder="Full Name"
                  id="name"
                  name="name"
                />
              </span>
              <br />
              <span>
                <i className="fa-solid fa-user"></i>
                <input
                  type="email"
                  // value={email}
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
                  placeholder="password"
                  id="password"
                  name="password"
                />
              </span>
              <br />
              <button type="submit" value={password} className="log-sign-btn">
                Sign Up
              </button>
            </form>
          </div>
          <p className="propmt">
            Already have an <span>account</span>? click the button below to
            login
          </p>
          <button
            className="sign-log-btn"
            onClick={() => props.onFormswitch("Login")}
            type="button"
          >
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
