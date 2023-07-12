import React from "react";
import { Container, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function ThisProjectContributors() {
  const [contributors, setContributors] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/v1/projectData/contributors/${id}`
        );
        setContributors(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  //   console.log("Contributors:", contributors);
  //   console.log("Contributors type:", typeof contributors);
  //   console.log("Contributors isArray:", Array.isArray(contributors));

  return (
    <>
      <Container>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contribution</th>
            </tr>
          </thead>
          <tbody>
            {contributors &&
              Array.isArray(contributors) &&
              contributors.map(
                (project) =>
                  project.contribution &&
                  Array.isArray(project.contribution) &&
                  project.contribution.map((contributor) => (
                    <tr key={contributor._id}>
                      <td>{contributor.name}</td>
                      <td>{contributor.emailAddress}</td>
                      <td>{contributor.contribute}</td>
                    </tr>
                  ))
              )}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
