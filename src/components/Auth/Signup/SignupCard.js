import React, { useState, useContext } from 'react';
import UserContext from '../../../UserContext';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import loginImage from "../../../Assets/login.png";
import '../../../style.css';
import { Link, useNavigate } from 'react-router-dom';

function SignupCard() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [restaurant, setRestaurant] = useState('H&H corp');
  const [errorMessage, setErrorMessage] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const validateForm = () => {
    if (firstname === '' || lastname === '' || email === '' || password === '') {
      setErrorMessage('All fields must be filled');
      return false;
    }

    const nameRegex = /^[A-Za-z]+$/;
    if (!firstname.match(nameRegex) || !lastname.match(nameRegex)) {
      setErrorMessage('First Name and Last Name should not contain special characters or numbers');
      return false;
    }

    if (password.length < 6) {
      setErrorMessage('Password should be at least 6 characters');
      return false;
    }

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!email.match(emailRegex)) {
      setErrorMessage('Invalid email');
      return false;
    }

    return true;
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    const data = { firstName: firstname, lastName: lastname, email, password, restaurant };

    try {
      const response = await axios.post('http://164.132.113.53:3500/api/auth/signup', data);

      if (response.data.error) {
        setErrorMessage(response.data.error);
      } else {
        console.log('Signup successfully');
        setErrorMessage('');
        fetch('http://164.132.113.53:3500/api/auth/namedisplay', {
          credentials: 'include'
        })
          .then(response => response.json())
          .then(data => {
            setUser(data);
            // Redirige vers la page de connexion après l'inscription
            navigate('/login');
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred');
    }
  };

  return (
    <div>
      <img className="image-class" src={loginImage} alt="card-img" />
      <Card className="projectd-card-view">
        <Card.Body>
          <Card.Title>Signup</Card.Title>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRestaurant">
              <Form.Control type="hidden" name="restaurant" value={restaurant} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Signup
            </Button>
            <p className="mt-3">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignupCard;
