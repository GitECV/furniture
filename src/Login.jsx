import React from "react";
import NavBarContainer from './components/nav-bar-container/nav-bar-container.jsx';
import HamburguerBack from "./components/hamburguer-menu-background/hamburguer-menu-background.jsx";
import LoginContainer from './components/login-container/login-container.jsx';

function Login() {

  return (
  <div className="App">
    <NavBarContainer text={"login."} container={".login-container"}/>
    <LoginContainer />
    <HamburguerBack />
  </div>);
}

export default Login;