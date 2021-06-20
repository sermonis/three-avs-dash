const COLOR = 0xdd0000;
const HEIGHT = 5;

export default class StaticObstacleObject extends THREE.Object3D {

	constructor ( staticObstacle ) {

		super();

		const geometry2D = new THREE.PlaneGeometry( staticObstacle.width, staticObstacle.height );

		const material2D = new THREE.MeshBasicMaterial( {

			color: COLOR,
			depthTest: false,
			transparent: true,
			opacity: 0.5,

		} );

	    const mesh2D = new THREE.Mesh( geometry2D, material2D );

		mesh2D.rotation.x = -Math.PI / 2;
	    mesh2D.layers.set( 2 );

		this.add( mesh2D );

		const geometry3D = new THREE.BoxBufferGeometry( staticObstacle.width, HEIGHT, staticObstacle.height );

		const material3D = new THREE.MeshToonMaterial( {

			color: COLOR,
			transparent: true,
			opacity: 0.5,

		} );

		const mesh3D = new THREE.Mesh( geometry3D, material3D );;

		mesh3D.position.setY( HEIGHT / 2 );
	    mesh3D.layers.set( 3 );

		this.add( mesh3D );

	    this.rotation.y = -staticObstacle.rot;
	    this.position.set( staticObstacle.pos.x, 0, staticObstacle.pos.y );

	}

};
