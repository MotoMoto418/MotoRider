import React from "react";

import Tile from "./Tile";

import image1 from '../resources/thrux-tile.png'
import image2 from '../resources/duca-bg.jpg'

export default function Tiletable() {
    // const n = [
    //     {
    //         image: {image},
    //         alt: "thrux",
    //         name: "THRUXTON RS",
    //         des: "BIKE",
    //     },

    //     {
    //         image: {image},
    //         alt: "thrux",
    //         name: "THRUXTON RS",
    //         des: "BIKE",
    //     },

    //     {
    //         image: {image},
    //         alt: "thrux",
    //         name: "THRUXTON RS",
    //         des: "BIKE",
    //     },

    //     {
    //         image: {image},
    //         alt: "thrux",
    //         name: "THRUXTON RS",
    //         des: "BIKE",
    //     },

    //     {
    //         image: {image},
    //         alt: "thrux",
    //         name: "THRUXTON RS",
    //         des: "BIKE",
    //     },

    //     {
    //         image: {image},
    //         alt: "thrux",
    //         name: "THRUXTON RS",
    //         des: "BIKE",
    //     },

    //     {
    //         image: {image},
    //         alt: "thrux",
    //         name: "THRUXTON RS",
    //         des: "BIKE",
    //     },

    //     {
    //         image: {image},
    //         alt: "thrux",
    //         name: "THRUXTON RS",
    //         des: "BIKE",
    //     },

    //     {
    //         image: {image},
    //         alt: "thrux",
    //         name: "THRUXTON RS",
    //         des: "BIKE",
    //     },
    // ];

  return (
    <>
      <div className="center table-container">
        <div className="row">
        <Tile 
            image={image1}
            alt="thrux"
            brand="THRUXTON RS"
            model="BIKE"
        />
        <Tile 
            image={image2}
            alt="thrux"
            brand="DUCATI"
            model="BIKE"
        />
        <Tile 
            image={image2}
            alt="thrux"
            brand="DUCATI"
            model="BIKE"
        />
        <Tile 
            image={image2}
            alt="thrux"
            brand="DUCATI"
            model="BIKE"
        />
        <Tile 
            image={image1}
            alt="thrux"
            brand="THRUXTON RS"
            model="BIKE"
        />

        {/* {n.map((i) => {
            return(<Tile 
            image={i.image}
            alt={i.alt}
            name={i.name}
            des={i.des}
        />)
        })} */}
        </div>
      </div>
    </>
  );
}
