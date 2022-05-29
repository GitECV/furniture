import React from "react";
import THREEDContainer from './components/3d-element-container/3d-element-container.jsx';
import NavBarContainer from './components/nav-bar-container/nav-bar-container.jsx';
import HamburguerBack from "./components/hamburguer-menu-background/hamburguer-menu-background.jsx";

function Element() {

  return (
  <div className="App">
    <NavBarContainer text={"visor."} container={".container3d"}/>
    <THREEDContainer />
    <HamburguerBack />
  </div>);
}

export default Element;