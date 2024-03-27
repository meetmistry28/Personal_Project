import React from "react";
import Header from "../user/component/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "../user/component/Footer/Footer";
import Home from "../user/container/Home/Home";
import About from "../user/container/about/About";
import Services from "../user/container/services/Services";
import Portfolio from "../user/container/portfolio/Portfolio";
import Pricing from "../user/container/pricing/Pricing";
import Blog from "../user/container/blog/Blog";
import Contact from "../user/container/contact/Contact";

export default function UserRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
