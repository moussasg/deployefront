import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import classes from "./index.module.css"
import logsi from "../../assets/logsi.png"
import { useAuth } from '../../autcontex';
function Login() {
  const { setUserToken } = useAuth(); // Destructure setUserToken from AuthContext
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    try { /// http://localhost:3002 vers le backed / onrender aussi
      const response = await axios.post('https://backend-dkec.onrender.com/login', { email, password })
      if (response.data.success === true) {
        const token = response.data.token; // 'jwt' le clé de stockage
        localStorage.setItem('jwt',token); // Save the token in localStorage
        setUserToken(token);
        navigate('/products')
      }
    }
      catch(error) {
          console.error('Erreur lors de la requête:', error.response);
          setmessage('Eroor !')
        }
    }
  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
      <img height='70' width='70' src={logsi} alt='logsi'></img>
      <div className={classes.conex}>
        <h5>Email:</h5>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <h5>Password:</h5>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />        <br/>

        <button className={classes.monBouton} type="submit">Sign In</button>
       </div>
      </form>
    </div>
  );
}
export default Login;
