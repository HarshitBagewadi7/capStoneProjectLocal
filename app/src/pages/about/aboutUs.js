import React from "react";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import About from "./about";
import "./aboutUs.css";
import Contact from "./contact";

function AboutUs() {
  const [key, setKey] = useState("about");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="about" title="About" className="aboutUs">
        <About />
      </Tab>
      <Tab eventKey="contact" title="Contact" className="aboutUs">
        <Contact />
      </Tab>
    </Tabs>
  );
}
export default AboutUs;
