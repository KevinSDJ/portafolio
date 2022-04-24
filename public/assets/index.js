import * as THREE from "three";
import n from "./icons8-node-js.svg";
import r from './icons8-react-480.png'
import h from './icons8-html-5.svg';
import css from './icons8-css3.svg'


const texture = new THREE.TextureLoader();

let matcaps={
	node:texture.load(n),
	react:texture.load(r),
	html:texture.load(h),
	css:texture.load(css)
}


export {matcaps}