import React from "react";
import { Outlet } from "react-router-dom";

const AboutContent = () => {
  return (
    <>
      <div>You are on the About Page.</div>
      <Outlet />
    </>
  );
};

export default AboutContent;
