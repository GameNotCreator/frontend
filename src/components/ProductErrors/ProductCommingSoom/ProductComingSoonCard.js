import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function ProductComingSoonCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Our product is <span className="purple">coming soon... </span>
            <br />
            <br />
            We can inform you that our product is in development.
            <br />
            <br />
            If you need more help, contact us on <a href='mailto:H.H.corporation@protonmail.com' style={{ textDecoration: 'none', color: 'white' }}><span className="purple">H.H.corporation@protonmail.com</span></a>
            <br />
            <br />

            If you want to be among the first to experience the product, we invite you to join the waitlist.<Form.Group className="mb-3" controlId="formBasicFirstName">
                <br />
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Your Email" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </p>
          <footer className="blockquote-footer">H&Hcorp</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ProductComingSoonCard;
