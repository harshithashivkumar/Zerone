import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Remove loader-related code here

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
