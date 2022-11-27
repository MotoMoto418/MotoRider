import React from "react";
import Fade from "react-reveal/Fade";

import Navbar from "./Navbar";

export default function Landing() {
  return (
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
          <Fade left>
            <p className="info-txt">For riders, by riders.</p>
            <Fade left>
              <p className="info-txt">Find the best bikes on the planet.</p>
            </Fade>
          </Fade>
        </div>
      </div>
    />
  );
}
