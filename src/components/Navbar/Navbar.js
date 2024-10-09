import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const [loginBtn, setLoginBtn] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for burger menu

    return (
        <div className="navbar">

            {/* Logo of the navbar  */}
            <Link to="/">
                <img src={logo} alt="logo" className="logo" />
            </Link>

            <div className={`nav-items ${isMobileMenuOpen ? "open" : ""}`}>
                <div className="nav-items-list">
                    <Link className="item" to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link className="item" to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <Link className="item" to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                    <Link className="item" to="/cart" onClick={() => setIsMobileMenuOpen(false)}>
                        Cart({cartItems.length})
                    </Link>
                </div>
                <div>
                    <Link to={loginBtn ? "/login" : "/"}>
                        <button
                            className={loginBtn ? "login-btn" : "logout-btn"}
                            onClick={() => {
                                setLoginBtn(!loginBtn);
                                setIsMobileMenuOpen(false);
                            }}
                        >
                            {loginBtn ? "Login" : "Logout"}
                        </button>
                    </Link>
                </div>
            </div>
            {/* Burger menu icon */}
            <div className="burger-menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <span className="burger-bar"></span>
                <span className="burger-bar"></span>
                <span className="burger-bar"></span>
            </div>
        </div>
    );
};

export default Navbar;
