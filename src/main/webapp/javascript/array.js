	'use strict';

	// Array
	
	// 1. Declaration
	const arr1 = new Array();
	const arr2 = [1, 2];
	
	// 2. Index position
	const fruits = ['apple', 'banana'];
	console.log(fruits);
	console.log(fruits[0]);
	console.log(fruits[1]);
	console.log(fruits[2]); // undefined
	console.log(fruits[fruits.length -1]);
	
	// 3. Looping over an array
	// print all fruits
	// a. for
	for(let i = 0; i < fruits.length; i++) {
		console.log(fruits[i]);
	}
	
	// b. for of
	for(let fruit of fruits) {
		console.log(fruit);
	}
	
	// c. forEach
	fruits.forEach(function(fruit, index, array) { // 보통 array는 받아오지 않는다.
		console.log(fruit, index, array);
	})
	
	fruits.forEach((fruit, index) => { // arrow function
		console.log(fruit, index);
	})
	
	fruits.forEach((fruit, index) => console.log(fruit, index)); // {}도 생략 가능