import "./landing.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import PricingPage from "./pricing/PricingPage";
import ProductPage from "./products/ProductPage";
import Signup from "./signup/Signup";
import SupportPage from "./support/SupportPage";
import PageNotFound from "./PageNotFound";
import CreateAccount from "./signup/CreateAccount";
import Login from "./login/Login";
import Layout from "./Layout";
import OtpSection from "./signup/VerifyOtp";

function LandingPageApp() {
  return (
    <>
    <Routes>
        {/* Pages with Navbar + Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Pages WITHOUT Navbar + Footer */}
        <Route path="/verify-otp" element={<OtpSection />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />

        {/* 404 */}
        <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  );
}

export default LandingPageApp;
