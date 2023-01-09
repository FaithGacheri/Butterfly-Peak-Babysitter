import React from "react";
import "../Styles/Footer.css";
import {
  FaFacebook,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-gray-900 text-white p-5 pt-20 ">
      <div className="grid grid-cols-2 m-2">
        <div className="grid grid-cols-2">
          <div className="flex justify-center">
            <div className="">
              <FaSearchLocation
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
            </div>
            <div>
              <p>Ngong road</p>
              <h4>Nairobi, Kenya</h4>
            </div>
          </div>

          <div>
            <div className="phone">
              <h4 className="flex flex-row">
                <FaPhone
                  size={20}
                  style={{ color: "#ffffff", marginRight: "2rem" }}
                />{" "}
                <span>+254 725 100 100</span>
              </h4>
              <h4 className="flex flex-row">
                <FaPhone
                  size={20}
                  style={{ color: "#ffffff", marginRight: "2rem" }}
                />
                <span> +254 730 946 820</span>
              </h4>
            </div>
            <div className="email">
              <h4 className="flex flex-row">
                <FaMailBulk
                  size={20}
                  style={{ color: "#ffffff", marginRight: "2rem" }}
                />
                <span>Bulkbutterflypeaks@gmail.com</span>
              </h4>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="">
            <h4>About</h4>
            <p>Impact stories</p>
            <p>Location</p>
            <p>How to hire</p>
          </div>

          <div className="">
            <h4>People</h4>
            <p>Book your nanny</p>
            <p>Look for opportunity</p>
            <p>Join the community</p>
          </div>

          <div className="contacts">
            <h4>Contact Us</h4>
            <p>Investors</p>
            <p>Blog</p>
            <p>Covid 19</p>
          </div>

          <div className="flex flex-row justify-evenly">
            <FaFacebook
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
            <FaInstagram
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
            <FaYoutube
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
           
          </div>
        </div>
      </div>
    <div>
         <p> &copy; 2023 butterflypeaks.com</p>
    </div>
    </div>
  );
};

export default Footer;
