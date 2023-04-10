import React, { useState } from "react";
import "./nav_styles.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="banner">
        <div className="banner-dialog">
          New Model 3 and Model Y vehicles qualify for a federal tax credit for
          eligible buyers. <a href="/#">Learn More</a>
        </div>
      </div>
      <div className="site__header">
        <div className="brand__name">
          <svg
            className="brand-icon"
            viewBox="0 0 342 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"></path>
          </svg>
          <span className="is_visually_hidden">Tesla homepage</span>
        </div>

        <div className="desktop center">
          <a href="/#">Model S</a>
          <a href="/#">Model 3</a>
          <a href="/#">Model X</a>
          <a href="/#">Model Y</a>
          <a href="/#">Solar Roof</a>
          <a href="/#">Solar Panels</a>
          <a href="/#">Powerwall</a>
        </div>
        <div className="desktop right">
          <a href="/#">Shop</a>
          <a href="/#">Account</a>
          <a
            href="/#"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            Menu
          </a>
          {menu && (
            <div className="menu-opened">
              <div className="menu-button" onClick={() => setMenu(!menu)}>
                <span className="close-icon">&times;</span>
              </div>
              <ul className="desktop__menu-items">
                <li>
                  <a href="/#">Existing Inventory</a>
                </li>
                <li>
                  <a href="/#">Used Inventory</a>
                </li>
                <li>
                  <a href="/#">Trade-In</a>
                </li>
                <li>
                  <a href="/#">Demo Drive</a>
                </li>
                <li>
                  <a href="/#">Insurance</a>
                </li>
                <li>
                  <a href="/#">Cybertruck</a>
                </li>
                <li>
                  <a href="/#">Roadster</a>
                </li>
                <li>
                  <a href="/#">Semi</a>
                </li>
                <li>
                  <a href="/#">Charging</a>
                </li>
                <li>
                  <a href="/#">Commercial Energy</a>
                </li>
                <li>
                  <a href="/#">Utilities</a>
                </li>
                <li>
                  <a href="/#">Find Us</a>
                </li>
                <li>
                  <a href="/#">Support</a>
                </li>
                <li>
                  <a href="/#">Utilities</a>
                </li>
                <li>
                  <a href="/#">Charging</a>
                </li>
                <li>
                  <a href="/#">Find Us</a>
                </li>
                <li>
                  <a href="/#">Support</a>
                </li>
                <li>
                  <a href="/#">Investor Relations</a>
                </li>
                <li>
                  <a href="/#">United States English</a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="mobile__menu">
          <div
            className="menu-icon"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            Menu
          </div>
          {menu && (
            <div className="menu-opened">
              <div className="menu-button" onClick={() => setMenu(!menu)}>
                <span className="close-icon">&times;</span>
              </div>
              <ul className="mobile__menu-items">
                <li>
                  <a href="/#">Model S</a>
                </li>
                <li>
                  <a href="/#">Model 3</a>
                </li>
                <li>
                  <a href="/#">Model X</a>
                </li>
                <li>
                  <a href="/#">Model Y</a>
                </li>
                <li>
                  <a href="/#">Solar Roof</a>
                </li>
                <li>
                  <a href="/#">Solar Panels</a>
                </li>
                <li>
                  <a href="/#">Powerwall</a>
                </li>
                <li>
                  <a href="/#">Existing Inventory</a>
                </li>
                <li>
                  <a href="/#">Used Inventory</a>
                </li>
                <li>
                  <a href="/#">Trade-In</a>
                </li>
                <li>
                  <a href="/#">Demo Drive</a>
                </li>
                <li>
                  <a href="/#">Insurance</a>
                </li>
                <li>
                  <a href="/#">Commercial Energy</a>
                </li>
                <li>
                  <a href="/#">Utilities</a>
                </li>
                <li>
                  <a href="/#">Charging</a>
                </li>
                <li>
                  <a href="/#">Find Us</a>
                </li>
                <li>
                  <a href="/#">Support</a>
                </li>
                <li>
                  <a href="/#">Investor Relations</a>
                </li>
                <li>
                  <a href="/#">Shop</a>
                </li>
                <li>
                  <a href="/#">Account</a>
                </li>
                <li>
                  <a href="/#">More</a>
                </li>
                <li>
                  <a href="/#">United States English</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
