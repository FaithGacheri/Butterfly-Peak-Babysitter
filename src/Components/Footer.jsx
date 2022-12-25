import React from "react";
import { FaPhoneSquareAlt, FaRegEnvelope, FaInstagram, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
//import "./App"
import "../Styles/Footer.css"

function Footer () {
    return (
        <div className="footer">
            <div className="section1">
                <h2>Contacts</h2>
                <div className="footer-contact">
                   <p><FaPhoneSquareAlt /> 
                    +254 25100100
                    +254 764380927</p>
                    <FaRegEnvelope />
                    <p>Butterflypeaksbabysitters@gmail.com</p>
                </div>
            </div>

            <div className="section2">
                <h2>Socials</h2>
                <div className="socials">
                    <FaInstagram /> <FaFacebookSquare /> <FaTwitterSquare />
                </div>
            </div>

            <div className="section3">
                <h2>About</h2>
                <p>Impact stories
                    Location
                    Leadership 
                    How to hire
                </p>
            </div>

            <div className="section4">
                <h2>People</h2>
                <p> Book your nanny
                    Look for opprtunity
                    Join the commumity
                </p>
            </div>

            <div className="section5">
                <h2>Contact us</h2>
                <p>
                    INvestors 
                     Blog 
                     Covid 19 
                  

                </p>
            </div>

        </div>

    )
}

export default Footer;