import NavBarContainer from './components/nav-bar-container/nav-bar-container.jsx';
import HamburguerBack from "./components/hamburguer-menu-background/hamburguer-menu-background.jsx";
import RegisterContainer from './components/register-container/register-container.jsx';

function Register() {

  return (
  <div className="App">
    <NavBarContainer text={"regístrate."} container={""}/>
    <RegisterContainer />
    <HamburguerBack />
  </div>);
}

export default Register;