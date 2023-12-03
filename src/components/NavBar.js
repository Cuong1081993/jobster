import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaCaretDown, FaUserCircle } from "react-icons/fa";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, toggleSideBar } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const [showLogOut, setShowLogOut] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSideBar());
  };
  const showLogout = () => {
    setShowLogOut(!showLogOut);
  };
  const handleLogout = () => {
    dispatch(logoutUser("Logging out ...."));
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button type="button" className="btn" onClick={showLogout}>
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogOut ? "dropdown show-dropdown" : "dropdown"}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
