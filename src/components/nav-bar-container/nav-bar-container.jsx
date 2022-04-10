import React, { useState } from "react";
import NavBarLogo from "../nav-bar-logo/nav-bar-logo";
import './css/principal-bar.css';

const Container = () => {
    return (
        <header className="nav-bar-container">
            <NavBarLogo clsName="nav-bar-logo" img={'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-02/tipi%20di%20arance%20-%20Finedininglovers.jpg?itok=-v2tcDmu'} description={"Son naranjas"} />
        </header>
      );
}

export default Container;