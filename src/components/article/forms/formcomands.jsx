import React , { useState } from 'react'
import stylee from "./index.module.css"
import axios from 'axios';
export default function formcomands(props) {
  const [prenom, setprenom ] = useState('');
  const [adress, setadresse] = useState('');
  const [numero, setnumero] = useState('');
  const handleChange = (event) => {
    const { name, value } = event.target; // name = nom,adress,numero 
    if (name === 'prenom') setprenom(value);
    if (name === 'adress') setadresse(value);
    if (name === 'numero') setnumero(value);
  }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        const response = await axios.post('https://backend-dkec.onrender.com/MesSmartphones/:id', {prenom,adress,numero, prix:props.prix, quantité:props.quantité, marque:props.marque , nom:props.nom} );
        console.log(response.data)
        if (response.data.success===true) { // il faut déclaré success dans le backedn f la réponse li trécupiriha
          confirm('your order is being processed thank you' )
        }
        } 
        catch (error) { 
            console.error('Response data:', error.response?.data);}
      }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className={stylee.inscr}>
        <h5>First and last name </h5>
        <input type="prenom" name="prenom" value={prenom} onChange={handleChange} />
        <h5>adress :</h5>
        <input type="adress" name="adress" value={adress} onChange={handleChange} />
        <h5>Number :</h5>
        <input type="numero" name="numero" value={numero} onChange={handleChange} />
        <button className={stylee.monBouton} type="submit">Buy</button>
      </div>
    </form>
    </>
  )
}
