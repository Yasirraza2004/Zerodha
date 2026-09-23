import { Outlet } from "react-router-dom";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

function Layout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}

export default Layout;