	'use strict';
	// Object-oriented programming
	// class: template
	// object: instance of a class
	// JavaScript classes
	// - introduced in ES6
	// - syntactical sugar over prototype-based inheritance
	
	// 1. Class declarations
	class Person {
		// constructor
		constructor(name, age) {
			//fields
			this.name = name;
			this.age = age;
		}
		// methods
		speak(){
			console.log(`${this.name}: hello!`);
		}
	}
	
	const moon = new Person('moon', 31);
	console.log(moon.name);
	console.log(moon.age);
	moon.speak();
	
	