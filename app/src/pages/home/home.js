import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TotalAchievement from "./totalAchievements";
import "./home.css";
import FeaturedProjects from "./featuredProjects";
import Slides from "./slides";
export const Home = () => {
  return (
    <>
      <div className="home">
        <h2>A Little Care Can Change the World!</h2>
        <Container>
          <Row>
            <Col>
              <h4>on We The People:</h4>
              <TotalAchievement />
            </Col>
            <Col>
              <FeaturedProjects />
            </Col>
          </Row>
        </Container>
        <Slides />
      </div>
    </>
  );
};
