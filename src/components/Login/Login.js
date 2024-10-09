import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-cmp">
      <h1>Login</h1>
      <form className="login-form">
        <input type="email" placeholder="Type your email" required />
        <input type="password" placeholder="Enter your password" required />
        <Link to="/" className="log">Login</Link>
        
      </form>
    </div>
  );
};

export default Login;
