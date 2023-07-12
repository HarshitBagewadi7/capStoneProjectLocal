import React from "react";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { setupUser } from "../../authContext/setup";
import { AuthContext } from "../../authContext/AuthContext";
import formImg from "../../assets/helping-hand.jpg";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const initialState = {
  username: "",
  email: "",
  password: "",
  isMember: true,
};

export default function Login() {
  const { user, dispatch } = useContext(AuthContext);
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    if (user) {
      return navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (values.isMember) {
      //handle login
      const { email, password } = values;
      try {
        const res = await axios.post(
          "http://localhost:3001/api/v1/auth/login",
          { email, password }
        );
        setupUser(res.data, dispatch);
        navigate("/");
      } catch (error) {
        if (error.response.status === 401) {
          setUserMessage(error.response.data);
        }
        // console.log(error);
      }
    } else {
      //register
      const { username, email, password } = values;
      try {
        // eslint-disable-next-line no-unused-vars
        const res = await axios.post(
          "http://localhost:3001/api/v1/auth/register",
          { email, username, password }
        );
        setUserMessage("User Created, click already a member and login");
        navigate("/login");
      } catch (err) {
        // console.log(err);
        setUserMessage(err.response.data);
      }
    }
  };

  return (
    <div className="container">
      <h1 className="text-center m-5">
        {values.isMember ? "Login" : "Register"}
      </h1>
      <Row>
        <Col>
          <img
            src={formImg}
            alt="formImage"
            style={{ height: "40vh", width: "70vh" }}
          />
        </Col>
        <Col>
          <div className="col-md-8">
            <p className="text-danger">{userMessage}</p>
            <form onSubmit={onSubmit}>
              {!values.isMember && (
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Enter username"
                    onChange={handleChange}
                  />
                </div>
              )}
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary m-1">
                {values.isMember ? "login" : "register"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right-circle-fill mx-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
              </button>
              <small className="m-3 text-center m-3" onClick={toggleMember}>
                {values.isMember
                  ? "Not a member yet? register"
                  : "Already a member, login"}
              </small>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
