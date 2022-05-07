import React, { setState } from "react";
import { Avatar } from 'primereact/avatar';
import { Knob } from 'primereact/knob';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index.js";
import elementImage  from '../../images/Wood049_PREVIEW.jpg'
import elementImage2  from '../../images/Metal038_PREVIEW.jpg'

const GUIElementSelector = props => {
  const material = useSelector((state) => state);
  const dispatch = useDispatch();
  const {Azabache} = bindActionCreators(actionCreators, dispatch);

  return (
    <h1>{material}</h1>
  );
}

export default GUIElementSelector;