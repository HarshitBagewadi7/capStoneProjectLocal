import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import dataAnalysis from "../../assets/data-analysis.jpg";
import facebook from "../../assets/facebook.jpg";
import peerToPeer from "../../assets/peer-to-peer.jpg";

export default function Slides() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={facebook} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={dataAnalysis}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={peerToPeer} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
