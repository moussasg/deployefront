import { Cursor, Typewriter } from "react-simple-typewriter"
import React, { useState } from 'react'
import "./App.css"
interface TypewriterProps {
    darkMode: boolean;
  }
  const TypewriterComponent: React.FC<TypewriterProps> = ({darkMode }) => {
    const words = [
	"Discover the latest cutting-edge smartphones , with unbeatable deals and personalized recommendations"]
  const darkModeStyles = { // on introduit aprés le return on passant par prop
    backgroundColor: '#333',
    color: '#fff',
    // Ajoutez d'autres styles spécifiques au mode sombre ic
  };
  const normalStyles = { // on introduit aprés le return on passant par prop
    backgroundColor: '#fff',
    color: '#333',
    // Ajoutez d'autres styles spécifiques au mode normal ici
  };
return (
<> {/*if darkmode = darkmodestyle */}
<div style={darkMode ? darkModeStyles : normalStyles} className="typewriter-container"> {/* Ajoutez une classe parente */}
<Typewriter typeSpeed={40} loop={0} words={words} />
<Cursor cursorColor="#ffc107" />
</div>
</>
)
}
export default TypewriterComponent;