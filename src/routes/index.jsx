import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import ContactMe from "../pages/ContactMe";
// import Portfolio from "../pages/Portfolio";
import PageNotFound from "../pages/PageNotFound";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      {/* <Route path="/portfolio" element={<Portfolio />} /> */}
      <Route path="/contact-me" element={<ContactMe />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Routers;
