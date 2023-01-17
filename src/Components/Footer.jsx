import React from 'react'
import "../Styles/Footer.css"
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <div className='footer'>
      <div className='top'>
        <div>
          <h1>Butterfly Peaks Babysitters</h1>
          <p>Stepping In When You Need To Step Out</p>
        </div>
       <div className='footer_socials'>
        <a href="https://facebook.com"><FaFacebookF/> </a>
        <a href="https://twitter.com"><FaTwitter/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
        <a href="https://youtube.com"><FaYoutube/></a>
       </div>
      </div>

      <div className='bottom'>
        <div>
          <Link to="/about">
        <a href='/'>About us</a>
        </Link>
          <h4>
            <p>Location</p>
            <p>Leadership</p>
            <p>How to hire</p>
            <p>Impact stories</p>
          </h4>
        </div>

        <div>
        <a href='/'>People</a>
          <h4>
            <p>Book your nanny</p>
            <p>Look for opportunity</p>
            <p>Join the community</p>
          </h4>
        </div>

        <div>
        <a href='/'>Contact Us</a>
          <h4>
            <p>Investors</p>
            <p>Blog</p>
            <p>butterflypeaks@gmail.com</p>
          </h4>
        </div>
      </div>
      <div className='coppyright'>
      <p id='copy'> &copy; 2023 butterflypeaksbabysitters.com</p>
      </div>
   </div>
  )
}

export default Footer