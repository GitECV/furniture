import React from "react";
import { Link } from "react-router-dom";

const NavBarMenu = props => {
    return (
        <li>
            <h3><Link to={props.path}>{props.name}</Link></h3>
        </li>
      );
}

export default NavBarMenu;