import React from "react";
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import  GUIElementSelector  from '../gui-element-selector-dos/gui-element-selector.jsx';
import { proxy, useSnapshot } from 'valtio';
import silla from '../../3d-elements/silla.glb';
import { Suspense, useRef, useState } from "react";
import { DoubleSide } from "three";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index.js";
import { useDispatch } from "react-redux";

import './css/3d-element-container.css';

const TREEDElementContainer = () => {

    //Le damos los Hooks que hacen referencia a los elementos hijos
    const [pulido, setPulido] = useState(0);
    const [barniz, setBarniz] = useState(0);
    const [encerado, setEncerado] = useState(0);

  //Sacamos los indices de los materiales que vamos a utilizar
  const mesilla_txt = useSelector((state) => state.tapizMaterial);
  const cajon_txt = useSelector((state) => state.cajonMaterial);
  const pomo_txt = useSelector((state) => state.pomoMaterial);
  const materialType = useSelector((state) => state.changeMaterial);

  const dispatch = useDispatch();
  const {mesillaPomo, mesillaCajon, mesillaMesilla} = bindActionCreators(actionCreators, dispatch);

  return (
    <div className='container3d'>
      <div className="model-container">
      <ModelContainer
      StateMesilla={mesilla_txt}
      StateCajon={cajon_txt}
      StatePomo={pomo_txt}
      MenuPomo={mesillaPomo}
      MenuCajon={mesillaCajon}
      MenuMesilla={mesillaMesilla}
      Pulido={pulido}
      Barniz={barniz}
      Encerado={encerado}
      />
      </div>
    <div>
      <GUI
        setPulido={setPulido}
        pulido={pulido}
        setBarniz={setBarniz}
        barniz={barniz}
        setEncerado={setEncerado}
        encerado={encerado}
      />
    </div>
</div>
    );
}

function ModelContainer(props) {
  return (
    <div className="canvas-size">
    <Canvas camera={{ position: [0, -40, 20] }}>
      <ambientLight intensity={0.5} color={'blue'} />
          <spotLight position={[10, 15, 10]} angle={0.75} castShadow={true} intensity={1} />
      <Suspense fallback={null}>
        <Cajonera
        StateMesilla={props.StateMesilla}
        StateCajon={props.StateCajon}
        StatePomo={props.StatePomo}
        MenuPomo={props.MenuPomo}
        MenuCajon={props.MenuCajon}
        MenuMesilla={props.MenuMesilla}
        Pulido={props.Pulido}
        Barniz={props.Barniz}
        Encerado={props.Encerado}
        />
      </Suspense>
      <OrbitControls maxDistance={20} minDistance={10} maxPolarAngle={Math.PI / 2} maxZoom={1} />
    </Canvas>
    </div>
  )
}

function Cajonera ( props ) {
  const group = useRef()
  const { nodes, materials } = useGLTF(silla);

  //Array con todas las texturas
  const txt_array = [
    'https://i.imgur.com/MJdrxcf.jpg', 
    'https://i.imgur.com/7pQfXYm.jpg', 
    'https://i.imgur.com/CSRW3nD.jpg', 
    'https://i.imgur.com/q9axK40.jpg',
    'https://i.imgur.com/3R3WG8f.jpg',
    'https://i.imgur.com/CoY9gk7.jpg',
    'https://i.imgur.com/H8G5wlu.jpg'
  ];
  //Variables para cada una de las partes de la Mesilla
  let deff_cajon = useLoader(THREE.TextureLoader, txt_array[parseInt(props.StateCajon)]);
  let deff_pomo = useLoader(THREE.TextureLoader, txt_array[props.StatePomo]);
  let deff_mesilla = useLoader(THREE.TextureLoader, txt_array[parseInt(props.StateMesilla)]);

  //Con el handler podemos controlar la propagación del evento y accionar el dispatcher
  const handleOnClickBack = (e) => {
    e.stopPropagation();
    props.MenuPomo();
  }

  const handleClickMadera = (e) => {
    e.stopPropagation();
    props.MenuCajon();
  }

  const handleClickPrincipal = (e) => {
    e.stopPropagation();
    props.MenuMesilla();
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh onClick={handleOnClickBack} geometry={nodes.polySurface1.geometry} material={materials.Fabric} scale={6}>
        <meshStandardMaterial attach="material" map={deff_pomo} roughness={0.9} />
      </mesh>
      <mesh onClick={handleClickPrincipal} geometry={nodes.polySurface2.geometry} material={materials.Fabric} scale={6}>
        <meshStandardMaterial attach="material" map={deff_mesilla} roughness={0.9} /> 
      </mesh>
      <mesh onClick={handleClickMadera} geometry={nodes.polySurface13.geometry} material={materials.Wood} scale={6}>
        <meshStandardMaterial attach="material" map={deff_cajon} roughness={props.Barniz / 100} /> 
      </mesh>
    </group>
  )
}


const GUI = (props) => {
  let elementGUI = null;
  if (props.Material !== null) {
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