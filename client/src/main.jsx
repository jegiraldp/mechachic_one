import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import { AuthProvider } from "./context/AuthContext";
import { CategoryContextProvider } from "./context/CategoryProvider.jsx";
import { ElementContextProvider } from "./context/ElementProvider.jsx";
import { ServiceContextProvider } from "./context/ServiceProvider.jsx";
import { PersonContextProvider } from "./context/PersonProvider.jsx";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CategoryContextProvider>
        <ElementContextProvider>
          <ServiceContextProvider>
            <PersonContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
            </PersonContextProvider>
          </ServiceContextProvider>
        </ElementContextProvider>
      </CategoryContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
