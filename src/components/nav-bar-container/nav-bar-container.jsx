import React, { useState } from "react";
import NavBarLogo from "../nav-bar-logo/nav-bar-logo";
import NavBarMenu from "../nav-bar-menu/nav-bar-menu";
import logo from "../../images/Logo_negro.png"
import './css/principal-bar.css';

const Container = () => {
    return (
        <header className="nav-bar-container">
            <div className="nav-bar-brand">
                <NavBarLogo clsName="nav-bar-logo" img={logo} description={"Son naranjas"} />
                <h2>furniture.</h2>
            </div>
            <ul className="nav-bar-menuConcept">
            <NavBarMenu name={"Menu"} reference={"https://orteil.dashnet.org/cookieclicker/"}/>
            <NavBarMenu name={"Quienes Somos"} reference={"#"}/>
            <NavBarMenu name={"Contacto"} reference={"#"}/>
            </ul>
        </header>
      );
}

export default Container;