import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import FlightSearch from "../components/FlightSearch";
import FeedbackForm from "../components/FeedbackForm";
import AboutUsPage from "../components/AboutUsPage";
import LoginForm from "../components/LoginForm";
import SignUp from "../components/SignUp";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

const FBSRouter = () => {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<FlightSearch />} />
        <Route path="home" element={<FlightSearch />} />
        <Route path="aboutus" element={<AboutUsPage/>} />
        <Route path="contactus" element={<FeedbackForm/>} />
        <Route path="login" element={<LoginForm/>} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="forgotpass" element={<ForgotPasswordForm/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default FBSRouter;
