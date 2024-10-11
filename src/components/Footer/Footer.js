import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.png"
import linkedin from "../../assets/linkedin1.png"
import twitter from "../../assets/twitter1.png"
import email from "../../assets/email1.png"
import github from "../../assets/github1.png"
import { Link } from 'react-router-dom'
import flag from "../../assets/flag.png"

const Footer = () => {
  return (
    <div className="footer">
     
        
       <div className="footer-left">
         
         <h2>FoodHub</h2>
         <p >FoodHub is an intuitive and dynamic web application designed to simplify food ordering from your favorite restaurants. </p>
       </div>

       <div className="footer-middle1">
         
         <h2>About</h2>
         <Link className="footer-sub" to="/about"><p>About us</p></Link>
         <Link className="footer-sub" to="/contact"><p>Contact us</p></Link>
         <Link className="footer-sub" to="/login"><p>Login </p></Link>
         

       </div>
       <div className="footer-middle2">
        <h2>Social Media</h2>
       <div className="social-media social-media2">
                <Link to="https://www.linkedin.com/in/manikanta-korimilli-04a22324b/"><img src={linkedin} className="social-img social-img1"></img></Link>
                <Link to="https://x.com/striverz_011"><img src={twitter} className="social-img social-img1" ></img></Link>
                <Link to="https://striverz.org.in"><img src={email} className="social-img social-img1" ></img></Link>
                <Link to="https://github.com/striverz"><img src={github} className="social-img social-img1"></img></Link>

            </div>
       </div>

       <div className="footer-right">
         <div className="right-u">
          <button>English</button>
          <button className="flag-btn">
            <img src={flag} className="flag"></img>
            India</button>
         </div>

         <div className="right-l">
         <input type="email"></input>
         <button>Send</button>

         </div>
          
       </div>
       <hr className="footer-divider" />
       <p className="footer-last">Copyright © 2024 FoodHub | All rights reserved</p>
       
    </div>
  )
}

export default Footer