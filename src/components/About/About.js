import React from "react";
import "./About.css"
import profile from "../../assets/profile.jpg"
import { Link } from "react-router-dom";
import linkedin from "../../assets/linkedin.png"
import twitter from "../../assets/twitter.png"
import email from "../../assets/gmail.png"
import github from "../../assets/github.png"

const About=()=>{
    return(
        <div className="about">
            <div className="about-me">
            <h1>ABOUT ME</h1>
            <img src={profile} className="profile-img"></img>
            <p>JavaScript | React.js | Node.js | Competitive Programmer</p>
            <div className="social-media">
                <Link to="https://www.linkedin.com/in/manikanta-korimilli-04a22324b/"><img src={linkedin} className="social-img"></img></Link>
                <Link to="https://x.com/striverz_011"><img src={twitter} className="social-img"></img></Link>
                <Link to="https://striverz.org.in"><img src={email} className="social-img"></img></Link>
                <Link to="https://github.com/striverz"><img src={github} className="social-img"></img></Link>

            </div>
            </div>
        </div>

    )
}
export default About;