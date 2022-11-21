import React from "react";

import Tile from "./Tile";

import image from '../resources/thrux-tile.png'

export default function Tiletable() {
    const n = 9;

  return (
    <>
      <div className="center table-container">
        <div className="row">
        <Tile 
            image={image}
            alt="thrux"
            name="THRUXTON RS"
            des="BIKE"
        />
        </div>
      </div>
    </>
  );
}
