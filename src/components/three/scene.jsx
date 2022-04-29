import { useRef, useEffect } from "react";
import { Canvas } from '@react-three/fiber'
import Sphere from './script.jsx'
import Electron from './reactcircle.jsx'



export default function Escena() {
	return (
		<Canvas>
		     <ambientLight />
             <pointLight position={[10, 10, 5]} />
			<Sphere position={[0,0,0]}/>
			<Electron position={[-2,0,0]} values={[-1,2,2]} op={["sin","sin","cos"]} icon={"react"}/>
			<Electron position={[-1,0,0]} values={[2,1,1]} op={["cos","cos","sin"]} icon={"node"} />
			<Electron position={[-2,-5,0]} values={[2,-1,-2]} op={["sin","cos","cos"]} icon={"html"} />
			<Electron position={[-1.5,-4,0]} values={[-1.5,1,1.4]} op={["sin","cos","cos"]} icon={"css"} />
			<Electron position={[-1.3,0,2]} values={[1,-1.2,2]} op={['sin','cos','cos']} icon={'postgres'}/>
			<Electron position={[-1.4,0,1.1]} values={[1.5,2,1.5]} op={['cos','sin','sin']} icon={'sequelize'}/>
			<Electron position={[2,0,1]} values={[1.5,2,1.5]} op={['sin','sin','cos']} icon={'docker'}/>
			<Electron position={[-2,-2,1]} values={[-1,1,-2]} op={["sin","sin","cos"]} icon={"express"}/>
			<Electron position={[-1.1,-2,2]} values={[-1.3,-1,1.7]} op={["sin","sin","cos"]} icon={"npm"}/>
		</Canvas>
	);
}
