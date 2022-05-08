import { useState } from "react";
import GUIElementSelector from '../gui-element-selector/gui-element-selector'
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index.js";

import './css/3d-element-container.css';

const TREEDElementContainer = () => {

  //Le damos los Hooks que hacen referencia a los elementos hijos
  const [pulido, setPulido] = useState(0);
  const [barniz, setBarniz] = useState(0);
  const [encerado, setEncerado] = useState(0);

  const material = useSelector((state) => state.material);
  const texture = useSelector((state) => state.texture);
  const dispatch = useDispatch();

  const {materialMetal, materialWood} = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      <GUI
       Material={material}
       setPulido={setPulido}
       pulido={pulido}
       setBarniz={setBarniz}
       barniz={barniz}
       setEncerado={setEncerado}
       encerado={encerado}
       />
     </div>
    );
}

const GUI = (props) => {
  let elementGUI = null;
  if (props.Material !== null) {
    console.log(props.Material);
    elementGUI = <GUIElementSelector
     materialType={props.Material}
     setPulido={props.setPulido}
     pulido={props.pulido}
     setBarniz={props.setBarniz}
     barniz={props.barniz}
     setEncerado={props.setEncerado}
    encerado={props.encerado}
     />
  }
  return elementGUI;
}

export default TREEDElementContainer;