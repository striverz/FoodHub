import React from 'react'
import { useRouteError } from 'react-router-dom'
import "./Error.css"
import error from "../../assets/error.png"
import { Link } from 'react-router-dom'

const Error = () => {

    const {data}=useRouteError();
    console.log(data);
  return (
    <div className="error">
        <div className="err-img">
        <img src={error} className="error-img"></img>

        </div>
        <p>Oops.!</p>
        <p>Seems like some thing went wrong</p>
        <Link className="error-btn" to="/"><button>Back to Home</button></Link>
        
    </div>
  )
}

export default Error