import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductPage from "./landing_page/products/ProductPage";
import Signup from "./landing_page/signup/Signup";
import SupportPage from "./landing_page/support/SupportPage";
import PageNotFound from "./landing_page/PageNotFound";
import CreateAccount from "./landing_page/signup/CreateAccount";
import Login from "./landing_page/login/Login";
import Layout from "./Layout";
import OtpSection from "./landing_page/signup/OtpSection";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <BrowserRouter>

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

</BrowserRouter>
  </StrictMode>,
);
