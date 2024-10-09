import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className="footer">
        
        <div className="footer-left">
          <img src={logo} className="footer-logo"></img>
          <h4>FoodHub</h4>
        </div>
        <div className="footer-right">
          <h5>MANIKANTA KORIMILLI</h5>
          <p>Fullstack Developer | Competitive Programmer</p>
        </div>
    </div>
  )
}

export default Footer