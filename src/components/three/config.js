const scene = new THREE.Scene({
			background: null,
			Color: "rgba(100%, 0%, 0%,1)",
		});
		
		const camera = new THREE.PerspectiveCamera(
		                                           60,
		                                           canvas.current.clientWidth/canvas.current.clientHeight,
		                                           0.4,
		                                           100
		                                           );
		const canvas=document.querySelector('.scene3d')
		scene.add(camera);
		const render = new THREE.WebGLRenderer({canvas});
		render.setSize(canvas.current.clientWidth,canvas.current.clientHeight);
		camera.position.z = 400;
		// add objects to scene
		let electronShape = new THREE.SphereGeometry(20, 20, 20);
		let cover = new THREE.MeshNormalMaterial()
		let electron1 = new THREE.Mesh(electronShape, cover);
		cube.add(electron1);
		electron1.position.set(-150,150,0)
		let electron2= new THREE.Mesh(electronShape,cover)
		cube.add(electron2)
		electron2.position.set(150,150,0)
		let electron3 = new THREE.Mesh(electronShape,cover)
		cube.add(electron3)
		electron3.position.set(0,150,150)
		let electron4= new THREE.Mesh(electronShape,cover)
		cube.add(electron4)
		electron4.position.set(180,20,0)

		
		scene.add(cube);
		
		let clock = new THREE.Clock();


		
		function resize (){
			camera.aspect=canvas.current.clientWidth/canvas.current.clientHeight;
			camera.updateProjectionMatrix()
			render.setSize(canvas.current.clientWidth,canvas.current.clientHeight);
			render.render(scene,camera)

		}
		const animate = () => {
			let t = clock.getElapsedTime();
			
			render.render(scene,camera)
			window.addEventListener('resize',resize,false)
			window.requestAnimationFrame(animate);
			
			electron1.position.x= Math.sin(5*t) * -150;
			electron1.position.y= Math.sin(5*t) * 150;
			electron1.position.z= Math.cos(5*t) * 150;

			electron2.position.x = Math.cos(5*t) * 150;
			electron2.position.y = Math.cos(5*t) * 150;
			electron2.position.z = Math.sin(5*t) * 150;
			let tOffset = 1.5 + clock.getElapsedTime();
			electron3.position.x= Math.sin(5*tOffset) * 0;
			electron3.position.y= Math.sin(5*tOffset) * 150
			electron3.position.z= Math.cos(5*tOffset) * 150

			electron4.position.x= Math.sin(5*t) * -180
			electron4.position.y= Math.cos(5*t) * 180
			electron4.position.z= Math.sin(5*t) * 20
			
		};
		//animate()
		
		