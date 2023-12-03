import React from "react";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        return (
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            key={link.id}
            onClick={toggleSidebar}
          >
            <span className="icon">{link.icon}</span>
            {link.text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
