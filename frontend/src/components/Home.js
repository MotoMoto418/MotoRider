import React from "react";

import Navbar from "./Navbar";
import Tiletable from "./Tiletable";
import Profile from "./Profile";

export default function Home() {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Navbar
        elements=<ul className="navbar-nav">
          {/* <li className="nav-item">
            <a href="/home" className="link profile" onClick={handleClick}>
              PROFILE
            </a>
          </li> */}
          <li className="nav-item dropstart">
            <a
              className="nav-link dropdown-toggle link profile"
              href="/home"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              PROFILE
            </a>
            <ul className="dropdown-menu dropdown-container">
              <li>
                <Profile name="SARANGA" />
              </li>
            </ul>
          </li>
        </ul>

        bannerImage=<div className="home-banner-image w-100 vh-100 d-flex justify-content-center align-items-center width: justified">
          <Tiletable />
        </div>
      />
    </>
  );
}
