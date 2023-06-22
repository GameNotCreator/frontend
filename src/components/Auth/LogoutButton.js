import React, { useContext } from 'react';
import Button from "react-bootstrap/Button";
import UserContext from '../../UserContext';
import axios from 'axios';

function LogoutButton() {
  const { setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      const response = await axios.get('https://api.hnh.tn/api/auth/logout', { withCredentials: true });
      if(response.status === 200){
        setUser(null);
      } else {
        console.error("Logout failed")
      }
    } catch (error) {
      console.error("An error occurred while logging out");
    }
  }

  return (
    <Button onClick={handleLogout}>Logout</Button>
  )
}

export default LogoutButton;
