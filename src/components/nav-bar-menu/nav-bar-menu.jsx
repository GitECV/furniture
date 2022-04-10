import React, { useState } from "react";

const NavBarMenu = props => {
    return (
        <li>
            <a href={props.reference}><h4>{props.name}</h4></a>
        </li>
      );
}

export default NavBarMenu;