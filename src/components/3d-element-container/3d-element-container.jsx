import React from "react";
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { proxy, useSnapshot } from 'valtio';
import ThreeDGui from '../THREEDGUI/THREEDGUI'
import bucket from '../../3d-elements/cajonera.glb';
import imp_deff_map1 from '../../images/wood_table_001_diff_4k.jpg'
import imp_rugh_map1 from '../../images/wood_table_001_rough_4k.jpg'
import imp_rugh_map2 from '../../images/Metal035_1K_Roughness.jpg'
import imp_deff_map2 from '../../images/Metal035_1K_Color.jpg'
import { Suspense, useRef, useState } from "react";
import { DoubleSide } from "three";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index.js";

import './css/3d-element-container.css';

const TREEDElementContainer = () => {

  const material = useSelector((state) => state);
  console.log(material);
  const dispatch = useDispatch();

  const {materialMetal, materialWood} = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      <h1 onClick={materialMetal}>Metal</h1>
      <h1 onClick={materialWood}>Madera</h1>
      <div>
        <ThreeDGui Material={material} />
      </div>
      </div>
    );
}

export default TREEDElementContainer;