import React, { useState , useContext} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import loginImage from "../../../Assets/login.png";
import '../../../style.css';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../../UserContext';  // correct


function LoginCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [restaurant, ] = useState('H&H corp');
  const { user, setUser } = useContext(UserContext);  // extract `user` here

  const navigate = useNavigate();

  const handleSubmit = async (e) => { 
    e.preventDefault();

    if(user && user.first_name && user.last_name) {
        setErrorMessage('Vous êtes déjà connecté');
        return;
    }

    const data = { email, password, restaurant };

    try {
      const response = await axios.post('https://api.hnh.tn/api/auth/login', data, { withCredentials: true });

      if (response.data.error) {
        setErrorMessage(response.data.error);
      } else {
        console.log('Login successfully');
        console.log(document.cookie); // print cookies
        setErrorMessage('') 
        // Récupérer les informations de l'utilisateur
        fetch('https://api.hnh.tn/api/auth/namedisplay', {
          credentials: 'include'  // pour envoyer les cookies avec la requête
        })
          .then(response => response.json())
          .then(data => {
            // mettre à jour l'état 'user' avec les informations de l'utilisateur
            setUser(data);
            navigate('/');  

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
          <Card.Title>Login</Card.Title>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <Form onSubmit={handleSubmit}>
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
              Login
            </Button>

            <p className="mt-3">
        {/* Remplacer <a> par <Link> */}
        Doesn't have an account? <Link to="/signup">Signup</Link>
      </p>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
export default LoginCard;
