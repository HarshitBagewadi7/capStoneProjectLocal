import React from "react";
import { Table, Row, Col } from "react-bootstrap";
import "./userProfile.css";
import { useContext } from "react";
import { AuthContext } from "../../authContext/AuthContext";

export const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <h1>Personal Details</h1>
      <br />
      <div className="userDetails">
        <Table>
          <Row>
            <Col>User Name:</Col>
            <Col>{user.username}</Col>
          </Row>
          <Row>
            <Col>Email ID:</Col>
            <Col>{user.email}</Col>
          </Row>
        </Table>
      </div>
      <br />
    </>
  );
};
