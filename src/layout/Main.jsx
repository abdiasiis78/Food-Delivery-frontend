import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import "../app.css"
import Footer from "../components/footer/Footer";
function Main() {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Main;
