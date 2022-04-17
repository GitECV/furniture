import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import bucket from '../../3d-elements/bucket.glb';
import { Suspense } from "react";
import { DoubleSide } from "three";


const Model = () => {
    const gltf = useLoader(GLTFLoader, bucket);
    return (
        <>
            <primitive  position={[0, 0, 0]} object={gltf.scene} scale={1} />
        </>
    );
};

function Box() {
  return(
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink"/>
    </mesh>
  )
}

const Plane = () => {
  return(
    <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2, 2, 2]}>
      <planeBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" side={DoubleSide} />
    </mesh>
  )
}

const CatalogItem = props => {
  return(
    <Canvas camera={{ position: [0, -40, 20] }}  style={{height: "900px"}}>
         <Suspense>
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

export default CatalogItem;