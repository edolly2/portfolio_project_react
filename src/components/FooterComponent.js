import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

import { MdSupportAgent } from "react-icons/md";
import React from "react";

const FooterComponent = () => {
  return (
    <footer className="fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Register Now</h3>
            <button>Try For Free</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Support</h3>
            <ul>
              <li>Help</li>
              <li>FAQs</li>
              <li>Billing</li>
              <li>App Problems</li>
              <li>
                <MdSupportAgent /> Chat With an Agent
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Site Map</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Pricing</li>
              <li>Contact</li>
              <li>Courses</li>
            </ul>
          </div>
          <div className="col">
            <h3>Follow Us</h3>
            <div>
              <BsFacebook />
              <BsTwitter />
              <BsInstagram />
              <BsLinkedin />
            </div>
          </div>
          <div className="col">
            <h3>Get In Touch</h3>
            <ul>
              <li>Phone -</li>
              <li>Email -</li>
              <li>Address -</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container footer-policy-container">
        <div className="row">
          <div className="col">
            <img src="#" alt="logo" />
          </div>
          <div className="col">COPYRIGHT</div>
          <div className="col">
            <small>TERMS</small>
          </div>
          <div className="col">
            <small>POLICY</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
