import React, { useState } from 'react';
import axios from 'axios';
import logsi from "../../assets/logsi.png"
import { useNavigate } from 'react-router-dom';
import classe from "./ins.module.css"
import { useAuth } from '../../autcontex';
import Circular from '../../components/matui/chakra';
function UserForm() {
  const navigate = useNavigate()
  const [spin , setspin] = useState("Sign Up")
  const { setUserToken } = useAuth(); // Destructure setUserToken from AuthContext
  const [message , setmessage] = useState('') // message vide
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  }
  const handleSubmit = async (event) => {
    setspin(<Circular/>)
    event.preventDefault();
    try {
      const response = await axios.post('https://backend-dkec.onrender.com/signup', { email, password })
      console.log(response)
      if (response.data.success === true) {
        const token = response.data.token; // 'jwt' le clé de stockage
        localStorage.setItem('jwt',token); // Save the token in localStorage
        setUserToken(token);
        navigate('/products')
        setmessage('successfull inscription !')
      }
    }
      catch(error) {
          console.error('Erreur lors de la requête:', error.response?.data);
          setmessage('inscription Error !')
        }
      }
  return (
    <>
      <p>{message}</p>
      <h3>SignUp</h3>
      <form onSubmit={handleSubmit}>
      <img height='70' width='70' src={logsi} alt='logsi'></img>
      <div className={classe.inscr}>
        <h5>Email : </h5>
        <input type="email" name="email" value={email} onChange={handleChange} />
        <h5>Password :</h5>
        <input type="password" name="password" value={password} onChange={handleChange} />
        <br/>
        <button className={classe.monBouton} type="submit"><div className={classe.spin}>{spin}</div></button>
       </div>
       </form>
       </>
  );
}
export default UserForm;
