import React,{useRef,useState} from 'react'
import { useFrame } from '@react-three/fiber'

export default function Sphere(props) {
  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.z += 0.01
  })

  return (
    <mesh
      {...props}
      ref={mesh} >
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial wireframe={true} />
    </mesh>
  )
}