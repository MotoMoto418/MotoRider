import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";

export default function Landing() {
  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate("signup");
  };

  const navigateToSignin = () => {
    navigate("signin");
  };

  return (
    // <>
    //   <div className="container">
    //     <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
    //       <a className="navbar-brand nav-margin" href="/">
    //         MOTODRIVER.
    //       </a>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>

    //       <div className="collapse navbar-collapse" id="navbarNav">
    //         <div className="mx-auto"></div>
    //         <ul className="navbar-nav">
    //           <li className="nav-item">
    //             <a href="/home" className="link home"
    //             onClick={{navigateToSignin}}>
    //               HOME
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a
    //               href="/signup"
    //               className="link signup"
    //               onClick={{ navigateToSignup }}
    //             >
    //               SIGN UP
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </nav>
    //   </div>

    //   <div className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
    //     <div className="container-txt">
    //       <p className="info-txt">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //       </p>
    //     </div>
    //   </div>
    // </>

    <Navbar
      elements=<ul className="navbar-nav">
        <li className="nav-item">
          <a href="/home" className="link home">
            HOME
          </a>
        </li>
        <li className="nav-item">
          <a href="/signup" className="link signup">
            SIGN UP
          </a>
        </li>
      </ul>
      bannerImage=<div className="landing-banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="container-txt">
          <p className="info-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    />
  );
}
