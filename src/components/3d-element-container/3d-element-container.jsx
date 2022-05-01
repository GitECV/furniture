import React from "react";
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import  MaterialIcon  from '../gui-element-selector/gui-element-selector.jsx';
import { proxy, useSnapshot } from 'valtio';
import bucket from '../../3d-elements/cajonera.glb';
import { Suspense, useRef, useState } from "react";
import { DoubleSide } from "three";

import './css/3d-element-container.css';

export default class TreeDElementContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      material: null
    };
  }

  handleNext = () => {
    this.setState({
      value: true
    });
  };

  render() {
    return (
        <div className='container3d-full-item'>
      <div className="model-container">
        <CatalogItem doClick={this.handleNext} />
      </div>
        <GUI renderElement={this.state.value} Material={"metal"} />
      </div>
    );
  }
}

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(bucket);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh onClick={props.doClick} geometry={nodes.pomo.geometry} material={materials.pomo_mat} position={[-0.04, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.04} />
      <mesh geometry={nodes.mesilla.geometry} material={materials.mesilla_mat} position={[-0.04, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.04} />
      <mesh geometry={nodes.cajon.geometry} material={materials.cajon_mat} position={[-0.04, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.04} />
    </group>
  )
}

const CatalogItem = props => {
  return(
    <Canvas camera={{ position: [0, -40, 20] }} style={{height: "100vh"}}>
         <Suspense fallback={null}>
         <OrbitControls maxDistance={1.5} minDistance={1} maxPolarAngle={Math.PI / 2} maxZoom={2} />
         <PerspectiveCamera
          aspect={1200 / 600}
          radius={(1200 + 600) / 4}
          fov={45}
          position={[1, 2, 2]}
         makeDefault />
          <ambientLight intensity={0.5} color={'red'} />
          <spotLight position={[10, 15, 10]} angle={0.3} castShadow={true} intensity={1} />
            <Model doClick={props.doClick} />
         </Suspense>
    </Canvas>
 );
  }

const GUI = (props) => {
  let elementGUI = null;
  if (props.renderElement === true) {
    elementGUI = <MaterialIcon MaterialType={props.Material} />
  }
  return elementGUI;
}