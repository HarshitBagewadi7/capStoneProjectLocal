import React, { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./projects.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProjects } from "../../redux/projectsSlice";

export default function Projects() {
  const [allProjects, setAllProjects] = useState("");
  // const allProjects = useSelector((state) => state);
  // const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3001/api/v1/projectData/projects").then((res) =>
      // (res) => dispatch(fetchProjects(res.data))
      setAllProjects(res.data)
    );
  }, []);
  // console.log(allProjects);

  const [filterProjects, setFilterProjects] = useState("All");
  return (
    <>
      <div className="projects">
        <Row>
          <Col colSpan={16}>
            <h1>Here are all the projects!</h1>
          </Col>
          <Col colSpan={2}>
            <Form.Select
              aria-label="Default select example"
              required
              style={{ width: "25%", marginLeft: "70%" }}
              onChange={(e) => setFilterProjects(e.target.value)}
            >
              <option value="All">Select All</option>
              <option value="Nature">Nature</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Food">Food</option>
              <option value="Social">Social</option>
            </Form.Select>
          </Col>
        </Row>
        <div className="projectCards">
          <Row xs={1} md={4} className="g-4">
            {/* {allProjects.projects.projectsData &&
              allProjects.projects.projectsData */}
            {allProjects &&
              allProjects
                .filter((project) => {
                  return (
                    filterProjects === "All" ||
                    project.category.includes(filterProjects)
                  );
                })
                .map((project) => (
                  <Col key={project._id}>
                    <Container className="individualCard">
                      <Card>
                        <Card.Img
                          variant="top"
                          src={project.imageLink}
                          className="img"
                        />
                        <Card.Body>
                          <Card.Title>{project.title}</Card.Title>
                          <Card.Text>{project.details}</Card.Text>
                          <Link to={`/project/${project._id}`} target="_blank">
                            <Button variant="outline-primary">
                              Read More..
                            </Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </Container>
                  </Col>
                ))}
          </Row>
        </div>
      </div>
    </>
  );
}
