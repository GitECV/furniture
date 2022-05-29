import React from "react";
import { Avatar } from 'primereact/avatar';
import { Knob } from 'primereact/knob';
import elementImage  from '../../images/Wood049_PREVIEW.jpg'
import elementImage2  from '../../images/Metal038_PREVIEW.jpg'
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index.js";

const ThreeDElementContainer = (props) => {

  //Declaramos los estados de la store de Redux
  const material = useSelector((state) => state.changeMaterial);

  //Sacamos los estados para comprobar que funciona

  const mesilla_txt = useSelector((state) => state.mesillaMaterial);
  const cajon_txt = useSelector((state) => state.cajonMaterial);
  const pomo_txt = useSelector((state) => state.pomoMaterial);

  const dispatch = useDispatch();
  //Sacamos los actiones de Redux para poder modificar los estados
  const { 
    pomo1, pomo2, pomo3, mesilla1, mesilla2, mesilla3, mesilla4, cajon1, cajon2, cajon3, cajon4
  } = bindActionCreators(actionCreators, dispatch);

  let renderElement = null;
  switch (material) {
    case "Mesilla":
      renderElement = (
        <div className="GUI-material">
          <h1>Tapiz delantero</h1>
          <div className='material-selector'>
              <Avatar onClick={mesilla1}  shape="circle" size='xlarge' image={ 'https://i.imgur.com/nd4Lega.jpg' } />
              <Avatar onClick={mesilla2} shape="circle" size='xlarge' image={ 'https://i.imgur.com/npJYBOW.jpg' } />
              <Avatar onClick={mesilla3} shape="circle" size='xlarge' image={ 'https://i.imgur.com/hBB8OTH.jpg' } />
            </div>

          </div>
      )
      break;
    case "Cajon":
      renderElement = (
        <div className="GUI-material">
          <h1>Reposabrazos</h1>
              <div className='material-selector'>
                  <Avatar onClick={cajon1} shape="circle" size='xlarge' image={ 'https://i.imgur.com/WwbfYHJ.jpg' } />
                  <Avatar onClick={cajon2} shape="circle" size='xlarge' image={ 'https://i.imgur.com/XQmwJSf.jpg' } />
                  <Avatar onClick={cajon3} shape="circle" size='xlarge' image={ 'https://i.imgur.com/98GIojX.jpg' } />
                  <Avatar onClick={cajon4} shape="circle" size='xlarge' image={ 'https://i.imgur.com/ywoPoXJ.jpg' } />
              </div>
              <h2>Barniz</h2>
                <Knob value={props.barniz} valueColor={"MediumTurquoise"} rangeColor={"SlateGray"} onChange={(e) => props.setBarniz(e.value)} />
              </div>);
      break;

      case "Pomo":
        renderElement = (
          <div className="GUI-material">
            <h1>Tapiz trasero</h1>
            <div className='material-selector'>
                <Avatar onClick={pomo1}  shape="circle" size='xlarge' image={ 'https://i.imgur.com/nd4Lega.jpg' } />
                <Avatar onClick={pomo2}  shape="circle" size='xlarge' image={ 'https://i.imgur.com/npJYBOW.jpg' } />
                <Avatar onClick={pomo3} shape="circle" size='xlarge' image={ 'https://i.imgur.com/hBB8OTH.jpg' } />
              </div>
            </div>
        );
        break;
    default:
      renderElement = null;
      break;
  }

  return renderElement;
}

export default ThreeDElementContainer;