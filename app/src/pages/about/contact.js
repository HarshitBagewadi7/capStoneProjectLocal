/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <div className="container">
        <p className="email">
          <p className="emailID heading">Email us at:</p>
          <p className="emailID content"> support.wethepeople@wtppl.com</p>
        </p>
        <p className="phone">
          <p className="emailID heading">Phone:</p>
          <p className="emailID content"> +91-9876543210</p>
        </p>
        <p className="address">
          <p className="emailID heading">Address: </p>
          <p className="content">
            LoremLorem ipsum dolor sit amet, consectetur adipisicing elit.
            Sapiente consequatur doloribus unde praesentium ipsum mollitia sint
            accusantium harum itaque incidunt earum.
          </p>
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://in.linkedin.com/in/harshit-bagewadi-365830125"
          target="_blank"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="#">
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="#">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="#">
          <i className="bx bxl-facebook-square"></i>
        </a>
      </div>
    </>
  );
}
