import Car from './Car.js';

export default class Physics {

	constructor () {

		this.cars = [];

	}

	step ( dt ) {

		this.cars.forEach( c => c.step( dt ) );

	}

	createCar () {

		const carInstance = new Car();
		this.cars.push( carInstance );

		return carInstance;

	}

};
