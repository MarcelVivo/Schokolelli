// src/index.js
import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./app";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(<App />);
