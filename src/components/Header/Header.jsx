import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <ul>
        <li>
          {/* <a href="/home">Home</a> */}
          {/* <Link to="/home">Home</Link> */}
          {/* <NavLink
            to="/home"
            className={({ isActive }) => isActive && "active"}
          >
            Home
          </NavLink> */}

          <span onClick={() => handleNavigation("/home")}>Home</span>
        </li>
        <li>
          {/* <a href="/about">About</a> */}
          {/* <Link to="/about">About</Link> */}
          {/* <NavLink
            to="/about"
            className={({ isActive }) => isActive && "active"}
          >
            About
          </NavLink> */}
          <span onClick={() => handleNavigation("/about")}>About</span>
        </li>
        <li>
          {/* <a href="/contact">Contact</a> */}
          {/* <Link to="/contact">Contact</Link> */}
          {/* <NavLink
            to="/contact"
            className={({ isActive }) => isActive && "active"}
          >
            Contact
          </NavLink> */}
          <span onClick={() => handleNavigation("/contact")}>Contact</span>
        </li>
        <li>
          {/* <a href="/contact">Contact</a> */}
          {/* <Link to="/contact">Contact</Link> */}
          {/* <NavLink
            to="/contact"
            className={({ isActive }) => isActive && "active"}
          >
            Contact
          </NavLink> */}
          <span onClick={() => handleNavigation("/user-details/skdfbbaskdfaskdf")}>user details</span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
