import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./createProject.css";
// import { useReducer } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const CreateProject = () => {
  // const [event, updateEvent] = useReducer(
  //   (prev, next) => {
  //     const newEvent = { ...prev, ...next };
  //     if (newEvent.name.length > 40) {
  //       newEvent.name = event.substring(5, 40);
  //     }
  //     if (newEvent.title.length > 40) {
  //       newEvent.title = event.substring(0, 40);
  //     }
  //     return newEvent;
  //   },
  //   {
  //     name: "",
  //     email: "",
  //     title: "",
  //     category: "",
  //     imageLink: "",
  //     goal: "",
  //     details: "",
  //   }
  // );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imageLink, setImgLink] = useState("");
  const [goal, setGoal] = useState("");
  const [details, setDetails] = useState("");

  return (
    <>
      <div className="createProject">
        <h1>Raise Funds For Anything and Everything!</h1>
        <h5>
          WeThePeople is fast, easy, and has no raise requirements or start up
          fees.
        </h5>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Row>
              <Col>
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Firstname Lastname"
                  required
                  // onChange={(e) => {
                  //   updateEvent({ name: e.target.value });
                  // }}
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
                  // onChange={(e) => {
                  //   updateEvent({ email: e.target.value });
                  // }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Col>
            </Row>
            <Form.Label maxLength={15}>Project Title:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Project name"
              required
              // onChange={(e) => {
              //   updateEvent({ title: e.target.value });
              // }}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="text-break"
            />
            <Form.Label>Project Category:</Form.Label>
            <Form.Select
              aria-label="Default select example"
              required
              // onChange={(e) => {
              //   updateEvent({ category: e.target.value });
              // }}
              onChange={(e) => {
                const selectedValue = e.target.value;
                setCategory(selectedValue);
              }}
            >
              <option value="">Select Category</option>
              <option value="Nature">Nature</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Food">Food</option>
              <option value="Social">Social</option>
            </Form.Select>

            <Row>
              <Col>
                <Form.Label>Image Link:</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="Please provide Image Link that shows your work"
                  required
                  // onChange={(e) => {
                  //   updateEvent({ imageLink: e.target.value });
                  // }}
                  onChange={(e) => {
                    setImgLink(e.target.value);
                  }}
                />
              </Col>
              <Col>
                <Form.Label>Goal (in USD):</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="In USD"
                  required
                  // onChange={(e) => {
                  //   updateEvent({ goal: e.target.value });
                  // }}
                  onChange={(e) => {
                    setGoal(e.target.value);
                  }}
                />
              </Col>
            </Row>
            <Form.Label>Project Details:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              required
              // onChange={(e) => {
              //   updateEvent({ details: e.target.value });
              // }}
              onChange={(e) => {
                setDetails(e.target.value);
              }}
              className="text-break"
            />
          </Form.Group>
          <Link to="/projects/">
            <Button
              variant="outline-primary"
              id="btnsubmit"
              formMethod="POST"
              onClick={(e) => {
                e.preventDefault();
                axios
                  .post(
                    `http://localhost:3001/api/v1/projectData/createProject`,
                    {
                      // event,
                      name,
                      email,
                      title,
                      category,
                      imageLink,
                      goal,
                      details,
                    }
                  )
                  .then(alert(`Project created Successfully`))
                  .then((res) => (window.location.href = "/projects"));
                setName("");
                setEmail("");
                setTitle("");
                setCategory("");
                setImgLink("");
                setGoal("");
                setDetails("");
                // updateEvent("");
              }}
            >
              Submit
            </Button>
          </Link>
        </Form>
      </div>
    </>
  );
};
