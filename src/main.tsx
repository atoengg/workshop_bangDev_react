import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SkeletonTheme baseColor="#e2e8f0" highlightColor="#f1f5f9">
        <App />
      </SkeletonTheme>
    </BrowserRouter>
  </React.StrictMode>
);
