import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPageApp from "./landing_page/LandingApp";
import DashboardApp from "./dashboard/DashboardApp";
import { AuthProvider } from "./dashboard/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Landing */}
          <Route path="/*" element={<LandingPageApp />} />

          {/* Dashboard */}
          <Route path="/dashboard/*" element={<DashboardApp />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
