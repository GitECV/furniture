import React from "react";
import NavBarContainer from './components/nav-bar-container/nav-bar-container.jsx';
import CatalogContent from './components/catalog-content/catalog-content.jsx';
import HamburguerBack from "./components/hamburguer-menu-background/hamburguer-menu-background.jsx";

const Catalogo = () => {
    return (
        <div>
        <NavBarContainer text={"catálogo."} container={".catalog-container"} />
          <CatalogContent />
          <HamburguerBack />
        </div>
      );
}

export default Catalogo;