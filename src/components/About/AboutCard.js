import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillCaretRight } from "react-icons/ai";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            H&H is a Tunisian enterprise, birthed from the fiery passion of two young developers. What began as a mere pastime, swiftly transformed into a calling, leading us to dedicate our energy to the creation of premium software solutions.
          </p>
          <p style={{ textAlign: "justify" }}>
            Today, H&H stands as a pillar of software development within the vibrant landscape of Tunisia's tech industry.
          </p>
          <p style={{ textAlign: "justify" }}>
            Our talented cadre of developers embodies our fervor and unyielding commitment to excellence. We invite you to join us on this riveting journey, to witness firsthand how we can turn the ether of your ideas into tangible reality.
          </p>
          <ul>
            <li className="about-activity">
              <AiFillCaretRight /> Innovative
            </li>
            <li className="about-activity">
              <AiFillCaretRight /> Reliable
            </li>
            <li className="about-activity">
              <AiFillCaretRight /> Dynamic
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "It Always Seems Impossible Until It's Done."
          </p>
          <footer className="blockquote-footer">Nelson Mandela</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
