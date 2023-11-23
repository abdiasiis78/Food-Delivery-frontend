import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import "../app.css"
function Main() {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}

export default Main;
