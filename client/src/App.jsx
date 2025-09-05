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
import ServicePage from "./pages/ServicePage";
import TermsAndConditions from "./components/Home/TermsAndConditions";
import PrivacyPolicy from "./components/Home/PrivacyPolicy";
import Booking from "./pages/Booking";
import AcceptTerms from "./components/Home/AcceptTerms";

// Pages


const App = () => {
  return (
    <BrowserRouter>
    <AcceptTerms/>
     <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />

        
       <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
       <Route path="/privacy-policy" element={<PrivacyPolicy />} />

         {/* Dynamic services */}
         <Route path="/services/:serviceId" element={<ServicePage />} />
      </Routes>
<WhatsAppButton/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
