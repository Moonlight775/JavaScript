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
	
	// 3. Property value shorthand
	const person1 = { name: 'bob', age: 2 };
	const person2 = { name: 'steve', age: 3 };
	const person3 = { name: 'dave', age: 4 };
	const person4 = makePerson('moon', 30);
	const person5 = new Person('moon', 31);
	console.log(person4);
	console.log(person5);
	
	function makePerson(name, age) {
		return {
			name, // key와 value의 이름이 동일하다면 생략가능 
			age,
		};
	}
	
	// 4. Constructor Function
	function Person(name, age) {
		// this = {};
		this.name = name;
		this.age = age;
		// return this;
	}
	
	// 5. in operator: property existence check (key in obj)
	console.log('name' in moon);
	console.log('age' in moon);
	console.log('random' in moon);
	console.log(moon.random);
	
	// 6. for..in vs for..of
	// for (kye in obj)
	console.clear();
	for (key in moon) {
		console.log(key);
	}
	
	// for (value of iterable)
	const array = [1, 2, 4, 5];
	// for(let i = 0; i < array.length ; i++) {
	//	console.log(array[i]);
	// }
	for(value of array) {
		console.log(value);
	}
	
	// 7. cloning
	// Object.assign(dest, [obj1, obj2, obj3...])
	const user = { name: 'moon', age: '20' };
	const user2 = user;	
	user2.name = 'coder';
	console.log(user);
	
	// old way
	const user3 = {};
	for (key in user) {
		user3[key] = user[key];
	}
	console.log(user3);
	
	const user4 = {};
	Object.assign(user4, user);
	// const user4 = Object.assign({}, user);
	console.log(user4);
	
	// another example
	const fruit1 = { color: 'red' };
	const fruit2 = { color: 'blue', size: 'big' };
	const mixed = Object.assign({}, fruit1, fruit2);
	console.log(mixed.color);
	console.log(mixed.size);
	
	
	
	
	
	
	
	
	
	
	
	
	
	