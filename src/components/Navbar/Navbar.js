import React from "react";
import "./Navbar.css"
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {useState} from "react";


const Navbar=()=>{
   

    const [loginBtn,setLoginBtn]=useState(true);
    return(
        <div className="navbar">
            <a href="/"><img src={logo} alt="logo" className="logo"></img></a>
            <div className="nav-items">
                <div className="nav-items-list">
                    <Link className="item" to="/">Home</Link>
                    <Link className="item" to="/about">About</Link>
                    <Link className="item" to="/contact">Contact</Link>
                    <Link className="item" to="/cart">Cart()</Link>
                </div>

                <div>
                    <button className={ loginBtn ? "login-btn" : "logout-btn"} onClick={()=>{
                        setLoginBtn(!loginBtn);

                    }}>{loginBtn ? "Login" : "Logout"}</button>
                </div>
                
                
            </div>
            


        </div>
    )

}
export default Navbar;