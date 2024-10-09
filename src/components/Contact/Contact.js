import React from "react";
import "./Contact.css"
import burger from "../../assets/burger.png"

const Contact=()=>{
    return(
        <div className="contact">
            <div className="contact-left">
                <img src={burger}></img>
            </div>
            <form className="contact-right">
                <h1>Contact US</h1>
                <input type="text" required></input>
                <input type="email" required></input>
                <textarea id="description" name="description" rows="4" placeholder="Enter the description">
                </textarea>
                <button>Submit</button>

            </form>
        </div>
    )
}
export default Contact;