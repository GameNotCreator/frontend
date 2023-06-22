import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://api.hnh.tn/api/products') // Remplacez cette URL par l'URL de votre serveur.
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des produits : ', error);
      });
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our <strong className="purple">Products </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few products ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {products.map((product, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={product.imgPath}
                isBlog={product.isBlog}
                title={product.title}
                description={product.description}
                ghLink={product.ghLink}
                demoLink={product.demoLink}              
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
