import { useState } from "react";
import NavBarLogo from "../nav-bar-logo/nav-bar-logo";
import NavBarMenu from "../nav-bar-menu/nav-bar-menu";
import { Sling as Hamburger } from 'hamburger-react'
import logo from "../../images/Logo_negro.png"
import './css/principal-bar.css';

const Container = props => {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className="nav-bar-container">
            <div className="nav-bar-brand">
                <NavBarLogo clsName="nav-bar-logo" img={logo} description={"Habitación amueblada con tintes azules"} />
                <h1 id="logo-text">{props.text}</h1>
            </div>
            <ul className="nav-bar-menuConcept">
            <div className="bigscreen-menu">
            <NavBarMenu name={"Home"} path={"/"} />
            <NavBarMenu name={"Catálogo"} path={"/catalogo"}/>
            <NavBarMenu name={"Contacta"} path={"/contacta"}/>
            </div>
            <Hamburger toggled={isOpen} toggle={setOpen} onToggle={toggled => {
                if (toggled) {
                   document.querySelector(".home-content-container").classList.add("hidden-visibility");
                   console.log("hola"); 
                } else {
                    document.querySelector(".home-content-container").classList.remove("hidden-visibility");
                    console.log("adios");
                }
            }} />
            </ul>
        </header>
      );
}

export default Container;