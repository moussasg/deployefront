import { Cursor, Typewriter } from "react-simple-typewriter"
import React from 'react'
import "./App.css"
function Tsx(){
const words = [
	"Discover the latest cutting-edge smartphones with unbeatable deals and personalized recommendations"]
return (
    <>
<div className="typewriter-container"> {/* Ajoutez une classe parente */}
<Typewriter typeSpeed={40} loop={0} words={words} />
<Cursor cursorColor="#ffc107" />
</div>
</>
)
}
export default Tsx;