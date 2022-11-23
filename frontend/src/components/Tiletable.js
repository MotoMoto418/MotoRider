import React, { useEffect, useState } from "react";

import Tile from "./Tile";

import thrux from '../resources/thrux-tile.png'
import cbr from '../resources/cbr-tile.jpg'
import kawa650 from '../resources/kawa650-tile.webp'
import duca from '../resources/duca-tile.webp'
import yamaha from '../resources/yamaha-tile.png'
import kawa1000 from '../resources/kawa1000-tile.png'
import trident from '../resources/trident-tile.webp'
import street from '../resources/street-tile.webp'

export default function Tiletable() {
    const [bikeData, setBikeData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const result = await fetch('http://localhost:4000/home');

        const jsonResult = result.json();
        setBikeData([...bikeData, jsonResult]);
      }
    })

  return (
    <>
      <div className="center table-container">
        <div className="row">
        <Tile 
            image={thrux}
            alt="thrux"
            brand="TRIUMPH"
            model="THRUXTON RS"
        />
        <Tile 
            image={cbr}
            alt="honda"
            brand="HONDA"
            model="CB650R"
        />
        <Tile 
            image={kawa650}
            alt="kawa"
            brand="KAWASAKI"
            model="Z650"
        />
        <Tile 
            image={duca}
            alt="DUCA"
            brand="DUCATI"
            model="PANIGALE V4SP2"
        />
        <Tile 
            image={yamaha}
            alt="YAMAHA"
            brand="YAMAHA"
            model="MT-09"
        />
        <Tile 
            image={kawa1000}
            alt="kawa"
            brand="KAWASAKI"
            model="Z1000"
        />
        <Tile 
            image={trident}
            alt="TRIUMPH"
            brand="TRIUMPH"
            model="TRIDENT 660"
        />
        <Tile 
            image={street}
            alt="kawa"
            brand="TRIUMPH"
            model="STREET TRIPLE RS"
        />
        </div>
      </div>
    </>
  );
}
