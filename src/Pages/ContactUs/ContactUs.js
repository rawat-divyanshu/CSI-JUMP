import React from "react";
import { contactUsStyles } from "./ContactUsStyles";
import Navbar from "./../../Components/Navbar/Navbar";
import Header from "./Sections/Header/Header";
import ContactForm from "./Sections/ContactForm/ContactForm";
import Footer from "./../Home/Sections/Footer/Footer";

const ContactUs = () => {
  const classes = contactUsStyles();
  return (
    <div className={classes.mainContainer}>
      {/* Navbar */}
      <Navbar idx={4} />

      {/* Header */}
      <Header />

      {/* Form Container */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
