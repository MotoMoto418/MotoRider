import React, { useState } from "react";

var _user = {
  userName: "",
    emailID: "",
    pword: "",
    cPword: "",
}

export default function Signup() {
  // const [user, setUser] = useState({
  //   userName: "",
  //   emailID: "",
  //   pword: "",
  //   cPword: "",
  // });

  const [user, setUser] = useState(_user);

  let name, value;

  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const [isError, setIsError] = useState(false);

  const validatePword = (event) => {
    name = event.target.name;
    value = event.target.value;

    

    if (user.pword !== user.cPword) {
      setIsError(true);
    } else  if (user.pword === user.cPword){
      setIsError(false);
    }

    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <div className="card-container">
        <div className="card signup-container center">
          <div className="card-body">
            <h5 className="card-title my-font">SIGN UP</h5>
            <hr className="rule" />
            <form className="my-font">
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3 info-container">
                    <label htmlFor="userName" className="form-label mylabel">
                      NAME
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="userName"
                      name="userName"
                      aria-describedby="nameHelp"
                      value={user.userName}
                      autoComplete="off"
                      onChange={handleInput}
                    />

                    <div id="nameHelp" className="form-text">
                      Please enter your full name.
                    </div>
                  </div>

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
                </div>

                <div className="col-lg-6">
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

                  <div className="mb-3 info-container">
                    <label htmlFor="cPword" className="form-label mylabel">
                      CONFIRM PASSWORD
                    </label>

                    <input
                      type="password"
                      className="form-control"
                      id="cPword"
                      name="cPword"
                      aria-describedby="cPwordHelp"
                      value={user.cPword}
                      autoComplete="off"
                      onChange={validatePword}
                    />
                    {isError ? (
                      <div id="cPwordHelp" className="form-text">
                        Passwords do not match.
                      </div>
                    ) : (
                      <div id="cPwordHelp" className="form-text">
                        Passwords matched.
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-dark signup-btn my-font">
                SIGN UP
              </button>

              <p className="my-font">
                Already have an account? <a href='/signin' className="signin-link my-font">Sign In.</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
