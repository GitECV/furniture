import React, { useEffect } from "react";
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { proxy, useSnapshot } from 'valtio';
import bucket from '../../3d-elements/cajonera.glb';
import { Suspense, useRef, useState } from "react";
import { DoubleSide } from "three";

const state = proxy({
  current: null,
  items: {
    cajon: "#506DFF",
    pomo: "#ffffff",
    mesilla: "#ffffff",
  }
});

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(bucket);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh onClick={handlePomoChange} geometry={nodes.pomo.geometry} material={materials.pomo_mat} position={[-0.04, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.04} />
      <mesh geometry={nodes.mesilla.geometry} material={materials.mesilla_mat} position={[-0.04, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.04} />
      <mesh geometry={nodes.cajon.geometry} material={materials.cajon_mat} position={[-0.04, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.04} />
    </group>
  )
}

const CatalogItem = props => {
  return(
    <Canvas camera={{ position: [0, -40, 20] }} style={{height: "100vh"}}>
         <Suspense fallback={null}>
         <OrbitControls maxDistance={4} minDistance={1} maxPolarAngle={Math.PI / 2} maxZoom={2} />
         <PerspectiveCamera
          aspect={1200 / 600}
          radius={(1200 + 600) / 4}
          fov={45}
          position={[1, 2, 2]}
         makeDefault />
          <ambientLight intensity={0.5} color={'red'} />
          <spotLight position={[10, 15, 10]} angle={0.3} castShadow={true} intensity={1} />
            <Model />
         </Suspense>
    </Canvas>
 );
}

const FullItem = props => {
  return (
    <div className='container3d-full-item'>
    <CatalogItem />
    </div>
  );
}

const handlePomoChange = () => {
  console.log("hola");
}

const handleCajonChange = () => {
  console.log("Cajón");
}

const GUIMenu = props => {

}

export default FullItem;