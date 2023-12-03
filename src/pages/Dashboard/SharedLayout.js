import React from "react";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { SmallSizeBar, NavBar, BigSizeBar } from "../../components";
import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <BigSizeBar />
        <SmallSizeBar />
        <div>
          <NavBar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
