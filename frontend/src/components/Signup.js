import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();


  // Handles Form Inputs
  const [user, setUser] = useState({
    userName: "",
    emailID: "",
    pword: "",
    cPword: "",
  });

  let name, value;

  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const [isError, setIsError] = useState(false);

  // Handles Password Confirmation on Frontend
  const validatePword = (event) => {
    name = event.target.name;
    value = event.target.value;

    if (user.pword !== user.cPword) {
      setIsError(true);
    } else if (user.pword === user.cPword) {
      setIsError(false);
    }

    setUser({ ...user, [name]: value });
  };

  // Handles Form Submission
  const [isUser, setIsUser] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {userName, emailID, pword, cPword} = user;

    const data = await fetch('http://localhost:4000/signup', {
      method: 'POST',
      crossDomain: true,
      headers: {
        mode: 'no-cors',
        'Content-Type': 'application/json',
        Accept: 'application/json',
        "Access-Control-Allow-Origin": "http://localhost:3000"
      },
      body: JSON.stringify({userName, emailID, pword})
    }).then(r => r.json().then(data => {
      setIsUser(data.isUser);
      navigate('/home');
    }))

    

    // .then((res) => res.json())
    // .then((data) => {
    //   console.log("Success", data);
    // })
    // .catch((err) => {
    //   console.error("Error: ", err);
    // });
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetch('http://localhost:4000/signup');
  //     const jsonData = await data.json();
  //     setIsUser(jsonData.isUser);
  //     console.log(isUser);
  //   }

  //   fetchData();
  // }, [])

  return (
    <>
      <div className="card-container">
        <div className="card signup-container center">
          <div className="card-body">
            <h5 className="card-title my-font">SIGN UP</h5>
            <hr className="rule" />
            <form className="my-font" onSubmit={handleSubmit}>
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
                      Please enter your full name. {isUser}
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
                Already have an account?{" "}
                <a href="/signin" className="signin-link my-font">
                  Sign In.
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
