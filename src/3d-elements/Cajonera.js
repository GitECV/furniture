/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/cajonera.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.pomo.geometry} material={materials.pomo_mat} position={[-0.04, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.04} />
      <mesh geometry={nodes.mesilla.geometry} material={materials.mesilla_mat} position={[-0.04, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.04} />
      <mesh geometry={nodes.cajon.geometry} material={materials.cajon_mat} position={[-0.04, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.04} />
    </group>
  )
}

useGLTF.preload('/cajonera.glb')
