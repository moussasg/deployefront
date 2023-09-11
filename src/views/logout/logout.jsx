import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import classes from "./index.module.css"
import Circular from '../../components/matui/chakra';
const Logout = () => {
  const [spin , setspin] = useState("Logout")
  const navigate = useNavigate()
  const handleLogout = async () => {
    setspin(<Circular/>)
    try {
      localStorage.removeItem('jwt');
      console.log('success logout')
      // Rediriger vers la page de connexion ou toute autre page appropriée après la déconnexion
      navigate('/login'); // Remplacez '/login' par l'URL de la page de connexion
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  };  
  return (
    <div>
      <button className={classes.buttlogout} onClick={handleLogout}>{spin}</button>
    </div>
  );
};
export default Logout;
