import React from "react";
import Button from "react-bootstrap/Button";
import whiteBackground from "../../assets/whiteBackground.jpg";
import { Col, Row, Card } from "react-bootstrap";
import "./featuredProjects.css";

export default function FeaturedProjects() {
  return (
    <>
      <h4>Featured Projects:</h4>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={whiteBackground} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">
                <Button variant="primary">Go somewhere</Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={whiteBackground} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">
                <Button variant="primary">Go somewhere</Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
