import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { proxy, useSnapshot } from 'valtio';
import bucket from '../../3d-elements/cajonera.glb';
import { Suspense, useRef } from "react";
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
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF(bucket);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.cajon.geometry} rotation={[Math.PI / 2, 0, 0]} scale={0.01} > 
        <meshStandardMaterial color="green"/>
      </mesh>
      <mesh material-color={snap.items.pomo} geometry={nodes.pomo.geometry} material={materials.pomo_mat} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh material-color={snap.items.mesilla} geometry={nodes.mesilla.geometry} material={materials.mesilla_mat} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

const Plane = () => {
  return(
    <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 2, 2]}>
      <planeBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="blue" side={DoubleSide} />
    </mesh>
  )
}

const CatalogItem = props => {
  return(
    <Canvas camera={{ position: [0, -40, 20] }}>
         <Suspense fallback={null}>
         <OrbitControls maxDistance={100} maxPolarAngle={Math.PI / 2} />
         <PerspectiveCamera
          aspect={1200 / 600}
          radius={(1200 + 600) / 4}
          fov={45}
          position={[1, 2, 2]}
         makeDefault />
          <ambientLight intensity={0.5} color={'red'} />
          <spotLight position={[10, 15, 10]} angle={0.3} castShadow={true} intensity={1} />
            <Model />
            <Plane />
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

const GUIMenu = props => {

}

export default FullItem;