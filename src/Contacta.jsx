import React from "react";
import NavBarContainer from './components/nav-bar-container/nav-bar-container.jsx';
import ContactForm from './components/contact-form/contact-form';
import HamburguerBack from './components/hamburguer-menu-background/hamburguer-menu-background.jsx';

const Contacta = () => {
    return (
        <div>
          <NavBarContainer text={"contacta."} container={".form-container"}/>
          <ContactForm />
          <HamburguerBack />
        </div>
      );
}

export default Contacta;