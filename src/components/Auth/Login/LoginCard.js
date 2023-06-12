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
  const [restaurant, setRestaurant] = useState('H&H corp');
  const { setUser } = useContext(UserContext);


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email, password, restaurant };

    try {
      const response = await axios.post('http://localhost:3500/api/auth/login', data, { withCredentials: true });

      if (response.data.error) {
        setErrorMessage(response.data.error);
      } else {
        console.log('Login successfully');
        console.log(document.cookie); // print cookies
        setErrorMessage('');

        // Récupérer les informations de l'utilisateur
        fetch('http://localhost:3500/api/auth/namedisplay', {
          credentials: 'include'  // pour envoyer les cookies avec la requête
        })
          .then(response => response.json())
          .then(data => {
            // mettre à jour l'état 'user' avec les informations de l'utilisateur
            setUser(data);
          })
          .catch(error => {
            console.error('Error:', error);
          });

        // Gérer la redirection en fonction du rôle de l'utilisateur
        if (response.data.role === 'dev') {
          navigate('/admin/homepage');
        } else if (response.data.role === 'client') {
          navigate('/clientHome');
        }
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
