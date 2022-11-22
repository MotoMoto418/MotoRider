import React from "react";

export default function Navbar(props) {
  return (
    <>
      <div className="container">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
          <a className="navbar-brand nav-margin" href="/">
            MOTORIDER.
          </a>
          <button
            className="navbar-toggler toggler-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mx-auto"></div>
            
            {props.elements}
          </div>
        </nav>
      </div>

      {props.bannerImage}
    </>
  );
}
