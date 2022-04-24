import * as THREE from "three";
import n from "./icons8-node-js.svg";
import r from './icons8-react-480.png'
import h from './icons8-html-5.svg';
import css from './icons8-css3.svg'
import sql from './sequelizejs-icon.svg'; 
import ex from './express.svg'
import dck from './icons8-estibador.svg';
import ptg from './icons8-postgresql.svg';

const texture = new THREE.TextureLoader();

let matcaps={
	node:texture.load(n),
	react:texture.load(r),
	html:texture.load(h),
	css:texture.load(css),
	sequelize:texture.load(sql),
	express:texture.load(ex),
	docker:texture.load(dck),
	postgres:texture.load(ptg),
}


export {matcaps}