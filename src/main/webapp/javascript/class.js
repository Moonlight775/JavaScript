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
	
	// 2. Getter and setters
	class User {
		constructor(firstName, lastName, age) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.age = age;  
			// getter, setter가 생성된다면 this.age는 메모리에 올라가있는 데이터를 읽어 오는 것이 아니라, 
			// getter를 호출하게 된다.
			// setter를 정의하는 순간 =age;를 호출할 때, 즉 값을 할당할 때 메모리에 바로 할당하는 것이 아닌
			// setter를 호출하게 된다.
		}
		
		get age() {
			return this._age;
		}
		
		// 전달된 value를 this.age에 할당할 때 메모리에 값을 업데이트하는 것이 아니라, setter를 호출하게 된다.
		// this.age인 경우 setter로 다시 돌아와서 이 문장은 또 다시 setter를 호출하며 계속 반복하게 된다.
		// call stack size exceeded 라는 error 메세지 발생
		// 이걸 방지하기 위해 getter와 setter안에서 쓰여지는 변수는 조금 다른 이름으로 만들어준다.
		set age(value) {
		//	if (value < 0) {
		//		throw Error('age can not be negative');
		//	}
			this._age = value < 0 ? 0 : value;
		}
	}
	
	const user1 = new User('Steve', 'Job', -1);
	console.log(user1.age);
	