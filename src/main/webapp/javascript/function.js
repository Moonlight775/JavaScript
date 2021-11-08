	// Function
	// - fundamental building block in the program
	// - subprogram can be used multiple times
	// - performs a task or calculates a value
	
	// 1. Function declaration
	// function name(param1, param2) { body... return; }
	// one function === one thing
	// naming: doSomething, command, verb
	// e.g. createCardAndPoint -> createCard, createPoint
	// function is object in JS
	function printHello() {
		console.log('Hello');
	}
	printHello();
	
	function log(message){
		console.log(message);
	}
	log('Hello@');
	log(1234);
	
	// 2. Parameters
	// primitive parameters: passed by value
	// object parameters: passed by reference
	function changeName(obj) {
		obj.name = 'coder';
	}
	const ellie = { name: 'ellie' };
	changeName(ellie);
	console.log(ellie);
	
	// 3. Default paramets (added in ES6)
	// parameter에 값이 안 들어올 경우를 대비하여, 파라미터자리에서 바로 지정해 줄 수 있다.
	function showMessage(message, from = 'unknown') {
		console.log(`${message} by ${from}`);
	}
	showMessage('Hi!');
	showMessage('Welcome','Hode');
	
	// 4. Rest parameters (added in ES6)
	// ...은 배열형태로 전달되게 된다.
	function printAll(...args) {
		for (let i = 0; i < args.length; i++) {
			console.log(args[i]);
		}
		
		for (const arg of args) {
			console.log(arg);
		}
		
		args.forEach((arg) => console.log(arg));
	}
	printAll('dream', 'coding', 'ellie');
	
	// 5. Local scope
	// {}의 scope는 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있는 것과 같다.
	let globalMessage = 'global'; //global variable
	function printMessage() {
		let message = 'hello';
		console.log(message); //local variable
		console.log(globalMessage);
		function printAnother() {
			console.log(message);
			let childMessage = 'hello';
		}
		//console.log(childMessage); //Uncaught ReferenceError: childMessage is not defined
	}
	printMessage();
	
	// 6. Return a value
	function sum(a, b) {
		return a + b;
	}
	const result = sum(1, 2); //3
	console.log(`sum: ${sum(1, 2)}`);	
	
	// 7. Early return, early exit
	// bad
	function upgradeUser(user) {
		if(user.point > 10) {
			//long upgrade logic...
		}
	}
	
	// good
	function upgradeUser(user) {
		if(user.point <= 10) {
			return;
		}
		// long upgrade logic...
	}
	
	
	// First-class function
	// functions are treated like any other variable
	// can be assigned as a value to variable
	// can be passed as an argument to other functions.
	// can be returned by another function
	
	// 1. Function expression
	// a function declaration can be called earlier than it is defined. (hoisted)
	// a function expression is created when the execution reaches it.
	const print = function(){ // anonymous function
		console.log('print');
	}
	print(); // print라는 변수에 함수를 호출하듯이 호출하면 print가 출력됨
	const printAgain = print; 
	printAgain(); // print출력
	const sumAgain = sum;
	console.log(sumAgain(1, 3));
	
	// 2. Callback function using function expression
	function randomQuiz(answer, printYes, printNo) {
		if (answer === 'love you'){
			printYes();
		} else {
			printNo();
		}
	}
	// anonymous function
	const printYes = function(){ 
		console.log('yes!');
	};
	
	// named function
	// better debugging in debugger's stack traces
	// recursions
	const printNo = function print(){
		console.log('no!');
	};
	randomQuiz('wrong', printYes, printNo);
	randomQuiz('love you', printYes, printNo);
	
	// Arrow function
	// always anonymous
	const simplePrint = function(){
		console.log('simplePrint!');
	}
	
	const simplePrint1 = () => console.log('simplePrint!');
	const add = (a, b) => a + b; // const add = function(a, b){ return a + b; };
	
	// {}을 쓰고 싶을 경우는 return을 해주어야 한다.
	const simpleMultiply = (a, b) => {
		// do something more
		return a * b;
	};
	
	// IIFE: Immediately Invoked Function Expression
	// function을 ()로 감싸고 함수를 부르듯 하면 바로 실행할 수 있다.
	(function hello() {
		console.log('IIFE');
	})();
	
	// Quiz
	// function calculate(command, a, b)
	// command: add, substract, divide, multiply, remainder
	
	
	
	
	
	
	
	
	
	
	