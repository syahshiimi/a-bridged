// Css import
import "./assets/css/index.css";
import "normalize-css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// Import Pages
import Home from "./pages/home";
import App from "./App";
import BaseSeven from "./pages/base7";
import Datumconverter from "./pages/datumconverter";
import Landing from "./pages/landing";
import CraftingTutorial from "./pages/craftingtutorial";
import Statutes from "./pages/statutes";

// Axios Config

const Index = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/" element={<App />}>
            <Route path="/home" element={<Home />} />
            <Route path="/base7" element={<BaseSeven />} />
            <Route path="/datumconverter" element={<Datumconverter />} />
            <Route path="/statutes" element={<Statutes />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/craftingtutorial" element={<CraftingTutorial />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
