import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import FlightSearch from "../components/FlightSearch";
import Login from "../components/Login";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";

const FBSRouter = () => {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<FlightSearch />} />
        <Route path="home" element={<FlightSearch />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default FBSRouter;
