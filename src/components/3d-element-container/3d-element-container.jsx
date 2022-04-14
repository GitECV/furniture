//import './css/catalog-item.css';
import { Canvas } from '@react-three/fiber';
import {OrbitControls, Stars} from "@react-three/drei";


function Box() {
    return(
      <mesh>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="hotpink"/>
      </mesh>
    )
  }
  

const CatalogItem = props => {
    return (
        <div className='THREEd-element-container'>
        <Canvas style={{height: "900px"}}>
          <OrbitControls />
          <Stars />
          <ambientLight intensity={0.5} color={'blue'} />
          <spotLight position={[10, 15, 10]} angle={0.3} castShadow={true} intensity={1} />
          <Box />
        </Canvas>
        </div>
      );
}

export default CatalogItem;