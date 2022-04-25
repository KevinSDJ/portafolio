import React from 'react'


export default function Sphere(props) {
  

 

  return (
    <mesh
      {...props}
       >
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial wireframe={true} opacity={0}  />
    </mesh>
  )
}