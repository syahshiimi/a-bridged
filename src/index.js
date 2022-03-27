// Css import
import "./assets/css/index.css";
import "normalize-css";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import axios from "axios";

// Import Pages
import Home from "./pages/home";
import App from "./App";
import Datumconverter from "./pages/datumconverter";
import Landing from "./pages/landing";

// Axios Config

const Index = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/" element={<App />}>
            <Route path="/home" element={<Home />} />
            <Route path="/datumconverter" element={<Datumconverter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));