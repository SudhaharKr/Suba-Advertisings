import React from "react";
import SubaAdsLogo from "../../Assets/SUBA Logo PNG 5.png";
import { Link,NavLink } from "react-router-dom";
import '../Footer/Footer.css'
const Footer = () => {
  return (
    <div>
      <div className="footer-page">
        <div className="footer-page-container">
          <div className="logoimage">
            <Link to="/">
              <img className="logo-image" src={SubaAdsLogo} alt="logo" />
            </Link>
            </div>
            <div className="navbar-menu">
            <ul className="menu">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
         
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
