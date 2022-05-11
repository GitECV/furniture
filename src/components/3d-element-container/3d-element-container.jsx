import React from "react";
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import  GUIElementSelector  from '../gui-element-selector/gui-element-selector.jsx';
import { proxy, useSnapshot } from 'valtio';
import cajonera from '../../3d-elements/cajonera.glb';
import { Suspense, useRef, useState } from "react";
import { DoubleSide } from "three";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index.js";
import { useDispatch } from "react-redux";

import './css/3d-element-container.css';
import Model from "../../3d-elements/Cajonera";
import { isConstructorDeclaration } from "typescript";

const TREEDElementContainer = () => {

  //Le damos los Hooks que hacen referencia a los elementos hijos
  const [pulido, setPulido] = useState(0);
  const [barniz, setBarniz] = useState(0);
  const [encerado, setEncerado] = useState(0);

  const material = useSelector((state) => state.material);
  const textureWood = useSelector((state) => state.textureWood);
  const textureMetal = useSelector((state) => state.textureMetal);
  const dispatch = useDispatch();
  const {materialMetal, materialWood} = bindActionCreators(actionCreators, dispatch);

  return (
      <div className='container3d-full-item'>
      <div className="model-container">
      <ModelContainer
      MaterialWood={materialWood}
      MaterialMetal={materialMetal}
      TextureWood={textureWood}
      TextureMetal={textureMetal}
      Pulido={pulido}
      Barniz={barniz}
      Encerado={encerado}
      />
      </div>
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

function ModelContainer(props) {
  return (
    <Canvas camera={{ position: [0, -40, 20] }} style={{height: "100vh"}}>
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Cajonera
        MaterialWood={props.MaterialWood}
        MaterialMetal={props.MaterialMetal}
        TextureWood={props.TextureWood}
        TextureMetal={props.TextureMetal}
        Pulido={props.Pulido}
        Barniz={props.Barniz}
        Encerado={props.Encerado}
        />
      </Suspense>
      <OrbitControls maxDistance={20} minDistance={10} maxPolarAngle={Math.PI / 2} maxZoom={1} />
    </Canvas>
  )
}

function Cajonera ( props ) {
  const group = useRef()
  const { nodes, materials } = useGLTF(cajonera);

  let [cajon, setCajon] = useState(0);

  //Creamos un array con imágenes
  let woodTextureDiffuse = ['https://i.imgur.com/n2avWYb.jpg', 'https://i.imgur.com/tBrn4NX.jpg', 'https://i.imgur.com/6GS7fmX.jpg'];
  

  //Creamos unos Handlers para controlar el tiempo que pasa entre onclick y onclick
  const handleOnClickPomo = (e) => {
    e.stopPropagation();
    props.MaterialMetal();
  }

  const handleClickCajon = (e) => {
    e.stopPropagation();
    props.MaterialWood();
    setCajon(props.TextureWood);
    props.MaterialWood();
  }

  const handleClickEstructura = (e) => {
    e.stopPropagation();
    props.MaterialWood();
  }
  
  //Aquí cargamos los mapas que irán en los materiales
  const deff_cajon = useLoader(THREE.TextureLoader, woodTextureDiffuse[cajon]);
  const deff_pomo = useLoader(THREE.TextureLoader, woodTextureDiffuse[props.TextureWood]);
  const deff_estructura = useLoader(THREE.TextureLoader, woodTextureDiffuse[props.TextureWood]);
  console.log(cajon);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh onClick={handleOnClickPomo} geometry={nodes.pomo.geometry} position={[-0.04, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1} >
      <meshStandardMaterial attach="material" map={deff_pomo} roughness={props.Pulido / 100} /> 
      </mesh>
      <mesh onClick={handleClickEstructura} geometry={nodes.mesilla.geometry} position={[-0.04, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1}>
        <meshStandardMaterial attach="material" map={deff_estructura} roughness={props.Barniz / 100} /> 
      </mesh>
      <mesh onClick={handleClickCajon} geometry={nodes.cajon.geometry} position={[-0.04, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1} >
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