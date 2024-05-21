import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vu Le Phu </span>
            from <span className="purple"> Ha Noi, Viet Nam.</span>
            <br />
            I am currently employed as a software developer at <a alt="myria" href="https://myria.com/">Myria </a>.
          
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you want to sit where nobody can sit, you must endure the feeling that nobody can endure"{" "}
          </p>
          <footer className="blockquote-footer">MTP</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;