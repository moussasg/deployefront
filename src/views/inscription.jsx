import React, { useState } from 'react';
import axios from 'axios';
import logsi from "../assets/logsi.png"
import { useNavigate } from 'react-router-dom';
import classe from "./ins.module.css"
import { useAuth } from '../autcontex';
function UserForm() {
  const navigate = useNavigate()
  const { setUserToken } = useAuth(); // Destructure setUserToken from AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://lasta-wu2q.onrender.com:10000/signup', { email, password })
      if (response.data.success === true) {
        const token = response.data.token; // 'jwt' le clé de stockage
        localStorage.setItem('jwt',token); // Save the token in localStorage
        setUserToken(token);
        navigate('/login')
      }
    }
      catch(error) {
          console.error('Erreur lors de la requête:', error.message);
        }
  return (
    <>
      <h3>SignUp</h3>
      <form onSubmit={handleSubmit}>
      <img height='70' width='70' src={logsi} alt='logsi'></img>
      <div className={classe.inscr}>
        <h5>Email : </h5>
        <input type="email" name="email" value={email} onChange={handleChange} />
        <h5>Password :</h5>
        <input type="password" name="password" value={password} onChange={handleChange} />
        <button type="submit">Submit</button>
       </div>
       </form>
       </>
  );
}
}

export default UserForm;
