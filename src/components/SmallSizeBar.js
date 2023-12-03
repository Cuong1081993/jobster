import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import Logo from "../components/Logo";
import { toggleSideBar } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import NavLinks from "./NavLinks";

const SmallSizeBar = () => {
  const { isSideBarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSideBar());
  };
  return (
    <Wrapper>
      <div
        className={
          isSideBarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" type="button" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggle} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSizeBar;
