import React, { useState } from 'react';
import { Avatar } from 'primereact/avatar';
import { Knob } from 'primereact/knob';
import elementImage  from '../../images/Wood049_PREVIEW.jpg'
import elementImage2  from '../../images/Metal038_PREVIEW.jpg'

import './css/SliderDemo.css';

const MaterialIcon = (props) => {
//Knob
//Slider
const [value, setValue] = useState(0);
//Inicializamos la variable que contendrá el contenido
let renderElement = null;

const handleClick = (e) => {
    let id = e.id.value;
    console.log(id);
}

//Le damos un switch para ver de que tipo de elemento se trata
switch (props.MaterialType) {
    case "wood":
        renderElement = (
            <div>
            <div className='material-selector'>
                <Avatar shape="circle" size='xlarge' image={ elementImage } id={"1"} />
                <Avatar shape="circle" size='xlarge' image={ elementImage } id={"2"} />
                <Avatar shape="circle" size='xlarge' image={ elementImage } id={"3"} />
            </div>
                <h2>Barniz</h2>
                <Knob value={value} valueColor={"MediumTurquoise"} rangeColor={"SlateGray"} onChange={(e) => setValue(e.value)} />
            </div>
        );
        break;
    case "metal":
        renderElement = (
            <div>
            <div className='material-selector'>
                <Avatar onClick={handleClick} shape="circle" size='xlarge' image={ elementImage2 } id={"1"} />
                <Avatar shape="circle" size='xlarge' image={ elementImage2 } id={"2"} />
                <Avatar shape="circle" size='xlarge' image={ elementImage2 } id={"3"} />
            </div>
                <h2>Pulido</h2>
                <Knob value={value} valueColor={"MediumTurquoise"} rangeColor={"SlateGray"} onChange={(e) => setValue(e.value)} />
            </div>
        );
        break;
        default:
            renderElement = null;
            break;
}
    return renderElement;
}

export default MaterialIcon;