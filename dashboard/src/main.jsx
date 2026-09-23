import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import Home from "./components/Home";
import { AuthProvider } from "./AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
