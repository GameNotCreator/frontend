import React from "react";
import Card from "react-bootstrap/Card";

function NoProductCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            We are <span className="purple">sorry </span>
            this product is unvalaible for the moment.
            <br />
            <br />
            We are receiving too many offers            <br />
            <br />
            If you need more help, contact us on <a href='mailto:H.H.corporation@protonmail.com' style={{ textDecoration: 'none', color: 'white' }}><span className="purple">H.H.corporation@protonmail.com</span></a>
            <br />
            <br />
          </p>
          <footer className="blockquote-footer">H&Hcorp</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default NoProductCard;
