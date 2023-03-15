/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { EthContext, EthProvider } from "./contexts/EthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
      <EthProvider>
        <App />
      </EthProvider>
    </BrowserRouter>
  </>
);
