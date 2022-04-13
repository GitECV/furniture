import NavBarLogo from "../nav-bar-logo/nav-bar-logo";
import NavBarMenu from "../nav-bar-menu/nav-bar-menu";
import logo from "../../images/Logo_negro.png"
import './css/principal-bar.css';

const Container = props => {
    return (
        <header className="nav-bar-container">
            <div className="nav-bar-brand">
                <NavBarLogo clsName="nav-bar-logo" img={logo} description={"Habitación amueblada con tintes azules"} />
                <h1 id="logo-text">{props.text}</h1>
            </div>
            <ul className="nav-bar-menuConcept">
            <NavBarMenu name={"Home"} path={"/"} />
            <NavBarMenu name={"Catálogo"} path={"/catalogo"}/>
            <NavBarMenu name={"Contacta"} path={"/contacta"}/>
            </ul>
        </header>
      );
}

export default Container;