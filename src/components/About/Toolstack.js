import React from "react";
import { Col, Row } from "react-bootstrap";
import {BsQuestionOctagon} from "react-icons/bs"


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <BsQuestionOctagon />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsQuestionOctagon />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsQuestionOctagon />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsQuestionOctagon />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsQuestionOctagon />
      </Col>
    </Row>
  );
}

export default Toolstack;
