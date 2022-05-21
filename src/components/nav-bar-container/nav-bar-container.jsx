import { Component, useState } from "react";
import NavBarLogo from "../nav-bar-logo/nav-bar-logo";
import NavBarMenu from "../nav-bar-menu/nav-bar-menu";
import { Sling as Hamburger } from 'hamburger-react'
import { Avatar } from "primereact/avatar";
import { Link } from "react-router-dom";
import logo from "../../images/Logo_negro.png"
import './css/principal-bar.css';

const Container = props => {
    const [isOpen, setOpen] = useState(false);
    const [loggout, setLoggout] = useState(false);
    const container = props.container;

    const Loggin = () => {
        let logginElement = null;

        if (sessionStorage.getItem("ID") === null) {
            logginElement = (<div className="loggin">
            <Link to={'/login'} >
                <Avatar image="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" />
            </Link>
            </div> );
        } else {
            if (loggout) {
                sessionStorage.removeItem('ID');
                alert("Acabas de salir de tu cuenta. ¡Nos vemos pronto!");
            }
            logginElement = (<div className="loggout">
            <h4><a href="/" onClick={() => {setLoggout(true)}}>Log Out</a></h4>
        </div>)
        }
        return (logginElement);
    }

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
            <Loggin />
            </div>
            <Hamburger toggled={isOpen} toggle={setOpen} onToggle={toggled => {
                if (toggled) {
                   document.querySelector(container).classList.add("hidden-visibility");
                   document.querySelector(".hamburguer-menu-background").classList.remove("hidden-visibility");
                } else {
                    document.querySelector(".hamburguer-menu-background").classList.add("hidden-visibility");
                    document.querySelector(container).classList.remove("hidden-visibility");
                }
            }} />
            </ul>
        </header>
      );
}

export default Container;