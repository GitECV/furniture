import React from "react";
import MaterialIcon from '../gui-element-selector/gui-element-selector'

const ThreeDGui = props => {
    let elementGUI = null;
    if (props.Material !== null) {
      elementGUI = <MaterialIcon MaterialType={props.Material} />
    }
    return elementGUI;
}

export default ThreeDGui;