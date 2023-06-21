import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { GoPlus } from "react-icons/go";
import { GiBleedingEye } from "react-icons/gi";
import UserContext from "../../../src/UserContext"; // import UserContext

function ProjectCards(props) {
  const { user } = useContext(UserContext); // get user from UserContext
  const [errorMessage, setErrorMessage] = useState('');

  const handleButtonClick = (link) => {
    if (user && user.first_name && user.last_name) {
      // if user is logged in, redirect to the link
      window.location.href = link;
    } else {
      // if user is not logged in, show error message
      setErrorMessage("Please log in to continue.");
    }
  }

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={`https://hnh.tn/${props.imgPath}`} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <Button variant="primary" onClick={() => handleButtonClick(props.ghLink)}>
          <GoPlus /> &nbsp;
          {props.isBlog ? "Blog" : "Buy"}
        </Button>
        {"\n"}
        {"\n"}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            onClick={() => handleButtonClick(props.demoLink)}
            style={{ marginLeft: "10px" }}
          >
            <GiBleedingEye /> &nbsp;
            {"View"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
