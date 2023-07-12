import axios from "axios";
import React, { useState } from "react";

export default function SignUp() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userMessage, setUserMessage] = useState("");

  return (
    <form>
      <h3>Sign Up</h3>

      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="User Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            axios
              .post("http://localhost:3001/register", {
                username: username,
                email: email,
                password: password,
              })
              .then(alert(`Signup Successful`))
              .then((res) => (window.location.href = "/login"));
            // .then((res) => setUserMessage(res.data.message));
          }}
        >
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/login">sign in?</a>
      </p>
      {/* <p>{userMessage}</p> */}
    </form>
  );
}
