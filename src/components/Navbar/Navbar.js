import React from "react";
import "./Navbar.css"
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <div className="navbar">
            <a href="/"><img src={logo} alt="logo" className="logo"></img></a>
            <div className="nav-items">
                <div className="nav-items-list">
                    <Link className="item">Home</Link>
                    <Link className="item">About</Link>
                    <Link className="item">Contact</Link>
                    <Link className="item">Cart</Link>
                </div>

                <div>
                    <button className="login-btn">Login</button>
                </div>
                
                
            </div>
            


        </div>
    )

}
export default Navbar;