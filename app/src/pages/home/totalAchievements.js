import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Donations from "../../assets/Donations.png";
import kids from "../../assets/kids.jpg";
import orphanage from "../../assets/orphanage.jpg";

export default function TotalAchievement() {
  return (
    <>
      <Carousel variant="light" className="border-gray-400">
        <Carousel.Item>
          <img className="d-block w-100" src={Donations} alt="First slide" />
          <Carousel.Caption>
            <h1 variant="dark">233,133</h1>
            <br />
            <h3>Projects Funded</h3>
            <p>Total number of projects funded till now.</p>
            <br />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={kids} alt="Second slide" />

          <Carousel.Caption>
            <h1 variant="dark">$7,224,233,133</h1>
            <br />
            <br />
            <h3>Towards creative work</h3>
            <p>
              Total amount funded for the creative works across the world from
              We the People!
            </p>
            <br />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={orphanage} alt="Third slide" />

          <Carousel.Caption>
            <h1 variant="dark">90,233,133</h1>
            <br />
            <br />
            <h3>Pledges</h3>
            <p>Number of funding pledged projects.</p>
            <br />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
