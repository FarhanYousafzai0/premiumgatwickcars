import { IoIosSend } from "react-icons/io";


import React, { useState } from "react";
import { SpinnerDotted } from "spinners-react";
import GlassButton from "../components/Home/GlassButton";

import ContactRight from "../components/contact/ContactRight";
import GoogleMapEmbed from "../components/contact/GoogleMapEmbed";
import ContactLeft from "../components/contact/ContactLeft";

const Contact = () => {


  return (
    <section className="w-screen mt-10 overflow-x-hidden min-h-screen bg-white text-black">
     

  
      <div className="md:w-[90%] w-[90%] py-20 mx-auto">
        <span className="md:text-6xl text-4xl font-semibold">
           Let’s Make Your Journey Seamless
        </span>

        {/* Form + Contact Info */}
        <div className="w-full pt-16 flex flex-col md:flex-row gap-20 text-lg">
         <ContactLeft/>

        <ContactRight/>
        </div>
      </div>
      <GoogleMapEmbed/>
    </section>
  );
};

export default Contact;
