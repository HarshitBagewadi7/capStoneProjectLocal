import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
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
import ThisProjectContributors from "./projectContributors";

function Project() {
  const [projectDetails, setProjectDetails] = useState("");

  const { id } = useParams();

  const now = 60;
  const [name, setName] = useState("");
  const [emailAddress, setEmail] = useState("");
  const [contribute, setContribute] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/v1/projectData/project/${id}`)
      .then((res) => setProjectDetails(res.data));
  });

  // console.log(projectDetails._id.contribution);

  // const fundStatus = (
  //   for(i=0; i<length.res.data; i++){

  //   }
  // );

  return (
    <>
      <Container className="mt-2" key={projectDetails.id}>
        <Tabs
          defaultActiveKey="home"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="home" title={projectDetails.title || "Default Title"}>
            <Row>
              <Col>
                <Card.Img
                  variant="top"
                  src={projectDetails.imageLink}
                  className="projectImg"
                />
              </Col>
              <Col>
                <h1>{projectDetails.title},</h1>
                <div>{projectDetails.details}</div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="profile" title="Author & Contributors">
            <h1>This Project is an initiative by,</h1>
            <br />
            <h5>Name: {projectDetails.name}</h5>
            <h5>Email: {projectDetails.email}</h5>
            <br />
            <h3>Below are the contributors for this project,</h3>
            <ThisProjectContributors />
          </Tab>
          <Tab eventKey="longer-tab" title="Funds Status">
            <h1>Target & Current status of this fund:</h1>
            <br />
            <div>
              <h5>Target: ${projectDetails.goal}</h5>
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
                            `http://localhost:3001/api/v1/projectData/contributeProject/${id}`,
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

export default Project;
