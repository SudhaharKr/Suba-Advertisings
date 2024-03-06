import React from "react";
import "../Header/Header.css";
import { Link, NavLink } from "react-router-dom";
import SubaAdsLogo from "../../Assets/SUBA Logo PNG 5.png";
const Header = () => {
  return (
    <div>
      <div className="header-topbar-left-container">
        <div className="left-container">
          <div className="mail-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mailfilledicon icon-tabler icon-tabler-mail-filled"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
                stroke-width="0"
                fill="currentColor"
              />
              <path
                d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                stroke-width="0"
                fill="currentColor"
              />
            </svg>
            <p className="mail">letstalk@hisoft.com</p>
          </div>
          <div className="location-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mappinfilledicon icon-tabler icon-tabler-map-pin-filled"
              width="13"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                stroke-width="0"
                fill="currentColor"
              />
            </svg>
            <p className="location">
              6580 Allison Turnpike Creminfort, AL 32808
            </p>
          </div>
        </div>
        <div className="header-topbar-right-container">
          <p className="faq-container">FAQ</p>
        </div>
      </div>
      <div className="navbar">
        <div className="header-menu-container">
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
          <div className="whatsapp-contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="whatsappicon icon-tabler icon-tabler-brand-whatsapp"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
            <p className="whatsapp-contact-no">+(704) 279-1249</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
