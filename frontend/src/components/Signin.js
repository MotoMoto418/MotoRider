import React, { useState } from "react";

export default function Signin() {
  const [user, setUser] = useState({
    emailID: "",
    pword: "",
  });

  let name, value;

  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    
  }

  return (
    <>
      <div className="card-container">
        <div className="card signup-container center">
          <div className="card-body">
            <h5 className="card-title my-font">SIGN IN</h5>
            <hr className="rule" />
            <form className="my-font" onSubmit={handleSubmit}>
              <div className="mb-3 info-container">
                <label htmlFor="emailID" className="form-label mylabel">
                  EMAIL ADDRESS
                </label>

                <input
                  type="email"
                  className="form-control"
                  id="emailID"
                  name="emailID"
                  aria-describedby="emailHelp"
                  value={user.emailID}
                  autoComplete="off"
                  onChange={handleInput}
                />

                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3 info-container">
                <label htmlFor="pword" className="form-label mylabel">
                  PASSWORD
                </label>

                <input
                  type="password"
                  className="form-control"
                  id="pword"
                  name="pword"
                  aria-describedby="pwordHelp"
                  value={user.pword}
                  autoComplete="off"
                  onChange={handleInput}
                />

                <div id="pwordHelp" className="form-text">
                  Please enter a strong password.
                </div>
              </div>

              <button type="submit" className="btn btn-dark signup-btn my-font">
                SIGN IN
              </button>

              <p className="my-font">
                Don't have an account?{" "}
                <a href="/signup" className="signin-link my-font">
                  Sign Up.
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
