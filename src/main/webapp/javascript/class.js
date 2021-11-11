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
			this._age = value < 0 ? 0 : value ;
		}
	}
	
	const user1 = new User('Steve', 'Job', -1);
	console.log(user1.age);
	
	// 3. Fields (public, private)
	// Too soon! 참고만할 것
	class Experiment {
		publicField = 2;
		#privateField = 0;
	};
	const experiment = new Experiment();
	console.log(experiment.publicField);
	console.log(experiment.privateField);
	
	// 4. Static properties and methods
	// Too soon! 마찬가지로 참고만 할 것
	class Article {
		static publisher = 'Dream Coding';
		constructor(articleNumber) {
			this.articleNumber = articleNumber;
		}
		
		static printPublisher() {
			console.log(Article.publisher);
		}
	}
	
	const article1 = new Article(1);
	const article2 = new Article(2);
	
	// object안에 publisher는 값이 지정되지 않음
	// static은 object 마다 할당되는 것이 아니라 class 자체에 붙어 있음
	console.log(article1.publisher); // undefined
	console.log(Article.publisher); // Dream Coding
	Article.printPublisher(); // Dream Coding
	
	// 5. Inheritance
	// a way for one class to extend another class.
	class Shape {
		constructor(width, height, color) {
			this.width = width;
			this.height = height;
			this.color = color;
		}
		
		draw() {
			console.log(`drawing ${this.color} color of`);
		}
		
		getArea() {
			return this.width * this.height;
		}
	}
	
	class Rectangle extends Shape {}
	class Triangle extends Shape {
		//overridng
		draw() {
			console.log('▲');
		}
		
		getArea() {
			return (this.width * this.height) / 2;
		}
	}
	
	const rectangle = new Rectangle(20, 20, 'blue');
	rectangle.draw();
	console.log(rectangle.getArea());
	const triangle = new Triangle(20, 20, 'red');
	triangle.draw();
	console.log(triangle.getArea());
	 
	// 6. Class checking: instancdOf
	console.log(rectangle instanceof Rectangle);
	console.log(triangle instanceof Rectangle);
	console.log(triangle instanceof Triangle);
	console.log(triangle instanceof Shape);
	console.log(triangle instanceof Object);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	