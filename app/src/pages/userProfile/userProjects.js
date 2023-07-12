import React from "react";
import Table from "react-bootstrap/Table";
import "./userProjects.css";
export const UserProjects = () => {
  return (
    <>
      <h1 className="userProject">Your Projects!</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sl. no</th>
            <th>Project Name</th>
            <th>Total Contribution Received</th>
            <th>Goal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>223</td>
            <td>1263</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>2131</td>
            <td>2712</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
