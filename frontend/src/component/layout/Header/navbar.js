import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar({isAuthenticated}) {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <Link className="nav__brand" to={'/'}>
       Gadgestic
      </Link>
      <ul className={active}>
        <li className="nav__item">

          <Link  className="nav__link" to={`/`}>
           Home
          </Link>
        </li>
        <li className="nav__item">
        <Link  className="nav__link" to={`/`}>
           About
          </Link>
        </li>
        <li className="nav__item">
        <Link  className="nav__link" to={`/products`}>
           Products
          </Link>
        </li>
        <li className="nav__item">
        <Link  className="nav__link" to={`/cart`}>
          Cart
          </Link>
        </li>
        <li className="nav__item">
        <Link  className="nav__link" to={`/`}>
           Contact
          </Link>
        </li>
        <li className="nav__item">
        <Link  className="nav__link" to={`/search`}>
           Search
          </Link>
        </li>

        <li className="nav__item">
        <Link  className="nav__link" to={`/login`}>
         {isAuthenticated ? "" : "Login"}
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
