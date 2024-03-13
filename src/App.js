import React from "react";
import Header from "./user/component/Header/Header";
import Home from "./user/container/Home/Home";
import Footer from "./user/component/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Services from "./user/container/services/Services";
import About from "./user/container/about/About";
import Portfolio from "./user/container/portfolio/Portfolio";
import Pricing from "./user/container/pricing/Pricing";
import Blog from "./user/container/blog/Blog";
import Contact from "./user/container/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
