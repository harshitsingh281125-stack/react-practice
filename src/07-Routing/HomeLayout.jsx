import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="container">
      <div className="tabs">
        <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <Outlet/>
    </div>
  );
};

export default HomeLayout;
