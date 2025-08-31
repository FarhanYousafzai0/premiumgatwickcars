// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Fleet from "./pages/Fleet";
import Contact from "./pages/Contact";
import Nav from "./components/Home/Nav";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Pages


const App = () => {
  return (
    <BrowserRouter>
     <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
<WhatsAppButton/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
