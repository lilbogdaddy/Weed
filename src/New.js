/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/new.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Empty" position={[0, 7.22, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1} />
        <group name="Cylinder001" position={[3.52, 2.6, 0.36]} rotation={[1.34, 0, 1.57]} scale={1} />
        <mesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={materials['Material.001']} position={[0.29, 2.61, 0.35]} rotation={[1.34, 0, 1.57]} scale={1}/>
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials['Material.004']} position={[3.64, 2.6, 0.36]} rotation={[0.82, 1.57, 2.09]} scale={[21.39, 1.02, 49.89]} />
      </group>
    </group>
  )
}

useGLTF.preload('/new.glb')
// 32.79