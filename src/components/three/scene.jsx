import { useRef, useEffect } from "react";
import { Canvas } from '@react-three/fiber'
import Sphere from './script.jsx'
import Electron from './reactcircle.jsx'



export default function Escena() {
	return (
		<Canvas>
		     <ambientLight />
             <pointLight position={[10, 10, 10]} />
			<Sphere position={[0,0,0]}/>
			<Electron position={[-2,0,0]} values={[-1,2,2]} op={["sin","sin","cos"]} icon={"react"}/>
			<Electron position={[-1,0,0]} values={[2,1,1]} op={["cos","cos","sin"]} icon={"node"} />
			<Electron position={[-2,-5,0]} values={[2,-1,-2]} op={["sin","cos","cos"]} icon={"html"} />
		</Canvas>
	);
}
