import React from 'react'
import classe from "./index.module.css"
import LogoAceuill from "./../assets/logos.jpg"
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
export default function Home() {
  return (
    <>
    <div className={classe.home}>
      <div className={classe.logopage}>
      <img src={LogoAceuill}></img>
      </div>
    <div className={classe.but}>
    </div>
    </div>
       </>
      )}
