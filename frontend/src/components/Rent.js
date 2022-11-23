import React from "react";

import Navbar from "./Navbar";
import Profile from "./Profile";

import Image from "../resources/thrux-tile.png";

export default function Rent() {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Navbar
        elements=<ul className="navbar-nav">
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
                <Profile name="MOTOMOTO" />
              </li>
            </ul>
          </li>
        </ul>
        bannerImage=<div className="home-banner-image w-100 vh-100 d-flex justify-content-center align-items-center width: justified">
          <div className="center rent-card">
            <div className="card">
              <div className="row rent-container">
                <div className="col-lg-4">
                  <img
                    src={Image}
                    className="img-fluid rounded-start"
                    alt="bike"
                  />
                </div>
                <div className="col-lg-8">
                  <div className="card-body">
                    <h5 className="card-title my-font mt-0">
                      TRIUMPH THRUXTON RS
                    </h5>

                    <div className="row rent-info-container">
                      <div className="col-lg-6 my-font">
                        <h5 className="scheme-info">TECHNICAL INFO:</h5>
                        <p>
                          Engine Type: Liquid-cooled, 8-valve, SOHC, 270° crank
                          angle parallel-twin
                        </p>
                        <p>Peak Power: 103 HP @ 7,500 rpm</p>
                        <p>Transmission: Manual</p>
                        <p>Gearbox: 6 Speed</p>
                        <p>Max Torque: 112 Nm @ 4,250 rpm</p>
                      </div>
                      <div className="col-lg-6">
                        <div className="my-font price-info">
                          <h5 className="scheme-info">RENTAL SCHEME:</h5>
                          <p className="card-text card-info my-font">
                            RATE: ₹7,800/HR
                          </p>
                          <p>7 DAYS: ₹54,600</p>
                          <p>15 DAYS: ₹1,00,000</p>
                          <p>30 DAYS: ₹2,10,000</p>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <a
                          className="btn btn-outline-dark rent-btn container"
                          href="/home"
                        >
                          BACK
                        </a>
                      </div>

                      <div className="col-lg-6">
                        <a
                          className="btn btn-dark rent-btn container"
                          href="/rent"
                          onClick={handleClick}
                        >
                          RENT NOW
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      />
    </>
  );
}
