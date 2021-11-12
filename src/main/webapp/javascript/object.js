	// Objects
	// one of the JavaScript's data types.
	// a colection of related data and/or functionality.
	// Nearly all objects in JavaScript are instances of Object
	// object = { key : value };
	
	// 1. Literals and properties
	/*const name = 'moon';
	const age = 4;
	print(name, age);
	function print(name, age) {
		console.log(name);
		console.log(age);
	}*/
	
	const obj1 = {}; // 'object literal' syntax
	const obj2 = new Object(); // 'object constructor' syntax
	
	function print(person) {
		console.log(person.name);
		console.log(person.age)
	} 
	
	const moon = { name: 'ellie', age: 4 };
	print(moon);
	
	// can add properties later
	moon.hasJob = true;	// Dynamically Typed Language (동적언어) 이기 때문에 나중에 properties 추가 가능
	console.log(moon.hasJob);
	
	delete moon.hasJob;
	console.log(moon.hasJob);
	
	// 2. Computed properties
	// key should be always string
	console.log(moon.name);
	console.log(moon['name']);
	moon['hasJob'] = true
	console.log(moon.hasJob);
	
	function printValue(obj, key) {
	// console.log(obj.key); // undefined, obj에 key가 들어 있는지 보게 됨
	console.log(obj[key]); 	// 다양한 key들을 변경해서 출력 가능 
							// 동적으로 key에 관련된 value를 받아 오는데 유용하게 사용 가능
	}
	printValue(moon, 'name');
	printValue(moon, 'age');
	