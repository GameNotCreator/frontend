import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import ProductComingSoonCard from "./ProductComingSoonCard";
import laptopImg from "../../../Assets/Construction-Sign-Transparent.png";

function ProductComingSoon() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Product is <strong className="purple">coming soon</strong>
            </h1>
            <ProductComingSoonCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProductComingSoon;
