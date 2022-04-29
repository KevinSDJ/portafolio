import * as THREE from "three";
import {useRef,useEffect} from "react";
import { useFrame } from '@react-three/fiber'
import {matcaps} from './../../../public/assets/index.js';


export default function Electron (props){
	let current = useRef()
	useFrame(({clock})=>{
		
		let t= clock.getElapsedTime()
		let op={
			cos:Math.cos(1*t),
			sin:Math.sin(1*t)
		}
		current.current.position.x= op[props.op[0]] * props.values[0];
		current.current.position.y= op[props.op[1]] * props.values[1];
		current.current.position.z= op[props.op[2]] * props.values[2];
	})
	
	return (
	        <mesh
	        {...props}
	          ref={current}
	        >
	        <sphereGeometry args={[0.3, 32, 24]}  />
	        <meshMatcapMaterial matcap={matcaps[props.icon]}  transparent={true}/>
	        </mesh>
	        )

}
