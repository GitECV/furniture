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
      <mesh geometry={nodes.cajon.geometry} material={materials.cajon_mat} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pomo.geometry} material={materials.pomo_mat} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.mesilla.geometry} material={materials.mesilla_mat} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/cajonera.glb')
