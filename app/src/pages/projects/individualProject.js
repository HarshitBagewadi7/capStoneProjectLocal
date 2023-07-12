// https://blog.logrocket.com/solve-react-useeffect-hook-infinite-loop-patterns/#:~:text=To%20get%20rid%20of%20your,useEffect%20on%20the%20first%20render.
import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Form,
  ProgressBar,
} from "react-bootstrap";
import { Tab, Tabs } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import ThisProjectContributors from "./projectContributors";

export default function IndividualProject(props) {
  const [name, setName] = useState("");
  const [emailAddress, setEmail] = useState("");
  const [contribute, setContribute] = useState("");
  const { id } = useParams();

  const now = 60;

  useEffect(() => {
    // Perform the GET call when the component mounts
    axios
      .get(`http://localhost:3001/project/${id}`)
      .then((response) => {
        // Process the response data here
      })
      .catch((error) => {
        // Handle errors here
      });

    // Clean up function (optional)
    return () => {
      // Cancel any ongoing requests or perform cleanup
    };
  }, [id]); // Specify the dependencies for the effect

  return (
    <>
      <Container className="mt-2" key={props._id}>
        <Tabs
          defaultActiveKey="home"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="home" title={props.title || "Default Title"}>
            <Row>
              <Col>
                <Card.Img
                  variant="top"
                  src={props.imageLink}
                  className="projectImg"
                />
              </Col>
              <Col>
                <h1>{props.title},</h1>
                <div>{props.details}</div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="profile" title="Author & Contributors">
            <h1>This Project is an initiative by,</h1>
            <br />
            <h5>Name: {props.name}</h5>
            <h5>Email: {props.email}</h5>
            <br />
            <h3>Below are the contributors for this project,</h3>
            <ThisProjectContributors />
          </Tab>
          <Tab eventKey="longer-tab" title="Funds Status">
            <h1>Target & Current status of this fund:</h1>
            <br />
            <div>
              <h5>Target: ${props.goal}</h5>
            </div>
            <div className="contributionStatus">
              <Row>
                <Col>
                  <h5>Current Status: </h5>
                  <ProgressBar
                    now={now}
                    label={`${now}%`}
                    style={{ height: "fit-content" }}
                  />
                </Col>
              </Row>
            </div>
            <div>
              <div>
                <h5>Contribute now: </h5>
                <Row>
                  <Col>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Firstname Lastname"
                      required
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      required
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Contribute (in USD):</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="In USD"
                      required
                      onChange={(e) => {
                        setContribute(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col>
                    <Button
                      variant="success"
                      id="btnsubmit"
                      formMethod="POST"
                      onClick={(e) => {
                        e.preventDefault();
                        axios
                          .post(
                            `http://localhost:3001/contributeProject/${id}`,
                            {
                              name,
                              emailAddress,
                              contribute,
                            }
                          )
                          .then(
                            alert(`Your contribution submitted Successfully`)
                          )
                          .then(
                            (res) => (window.location.href = "/contributors")
                          );
                        setName("");
                        setEmail("");
                        setContribute("");
                      }}
                    >
                      Contribute
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}
