import React, { useState } from "react";

const NavBarMenu = props => {
    return (
        <li>
            <a href={props.reference}><h3>{props.name}</h3></a>
        </li>
      );
}

export default NavBarMenu;