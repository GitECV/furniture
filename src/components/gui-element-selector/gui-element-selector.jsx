import { Avatar } from 'primereact/avatar';
import { Knob } from 'primereact/knob';
import elementImage  from '../../images/Wood049_PREVIEW.jpg'
import elementImage2  from '../../images/Metal038_PREVIEW.jpg'
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index.js";

const ThreeDElementContainer = (props) => {

  //Declaramos los estados de la store de Redux
  const textureWood = useSelector((state) => state.textureWood);
  const textureMetal = useSelector((state) => state.textureMetal);
  const material = useSelector((state) => state.material);
  const dispatch = useDispatch();
  //Sacamos los actiones de Redux para poder modificar los estados
  const { 
    texture0, texture1, texture2, texture3, texture4, texture5
  } = bindActionCreators(actionCreators, dispatch);

  let renderElement = null;
  switch (material) {
    case "metal":
      renderElement = (
        <div className="GUI-material">
          <div className='material-selector'>
              <Avatar onClick={texture3}  shape="circle" size='xlarge' image={ elementImage2 } />
              <Avatar onClick={texture4}  shape="circle" size='xlarge' image={ elementImage2 } />
              <Avatar onClick={texture5} shape="circle" size='xlarge' image={ elementImage2 } />
            </div>
            <h5>{textureMetal}</h5>
            <h2>Pulido</h2>
              <Knob value={props.pulido} valueColor={"MediumTurquoise"} rangeColor={"SlateGray"} onChange={(e) => props.setPulido(e.value)} />
          </div>
      )
      break;
    case "wood":
      
      renderElement = (<div className="GUI-material">
          <div className='material-selector'>
              <Avatar onClick={texture0} shape="circle" size='xlarge' image={ elementImage } />
              <Avatar onClick={texture1} shape="circle" size='xlarge' image={ elementImage } />
              <Avatar onClick={texture2} shape="circle" size='xlarge' image={ elementImage } />
          </div>
          <h5>{textureWood}</h5>
          <h2>Barniz</h2>
            <Knob value={props.barniz} valueColor={"MediumTurquoise"} rangeColor={"SlateGray"} onChange={(e) => props.setBarniz(e.value)} />
          </div>);
      break;
    default:
      renderElement = null;
      break;
  }

  return renderElement;
}

export default ThreeDElementContainer;