	// 1. Use strict
	// added in ES 5
	// use this for Vanilla Javascript
	'use strict';
	
	// 2. Variable
	// let (added in Es6)
	
	let name = 'ellie';
	console.log(name);
	name = 'hello';
	console.log(name);

	// block scope
	// {}밖에서는 {}안의 내용을 볼 수 없다.
	// {}밖에서 console.log로 불러보려해도 불러지지않는다.
	{
	let name = 'ellie';
	console.log(name);
	name = 'hello';
	console.log(name);
	}
	console.log(name);
	
	// global scope
	// 어디서나 접근 가능 
	// 어플리케이션이 실행되는 순간부터 끝날때까지 메모리에 탑재되어 있기 때문에 최소한으로 사용
	let globalName = 'global name';
	console.log(globalName);
	
	// var (don't ever use this!)
	// var는 변수를 선언하기도 전에 사용할 수 있다.
	// var hoisting (move declaration from bottom to top)
	// has no block scope
	console.log(age);
	age = 4;
	console.log(age);
	var age;
	
	// let은 var와 다르게 변수를 선언하기 전에는 사용할 수 없다.
	// name = 4;
	// let name;
	
	// 3. Constants
	// favor immutable data type always for a few reasons:
	// - security
	// - thread safety
	// - reduce human mistakes
	const daysInWeek = 7;
	const maxNumber = 5;
	
	// 4. Variale types
	// primitive, single item : number, string, boolena. null, undefined, symbol
	// object, box container
	// function, first-class function
	
	const count = 17; // integer
	const size = 17.1; // decimal number
	// 템플릿 리터럴 (Template Literal)
	// ES6부터 새로 도입된 문자열 표기법, 따옴표 대신 백틱(`)을 사용한다.
	// 표현식 삽입(Expression interpolation)
	// ${} 사이에 변수나 연산 등을 삽입할 수 있다.
	// ${}의 결과는 문자열로 자동 변환됨.
	console.log(`value: ${count}, type: ${typeof count}`);
	console.log(`value: ${size}, type: ${typeof size}`);
	
	// number - special numeric values: infinity, -infinity, NaN
	const infinity = 1 / 0;
	const negativeInfinity = -1 / 0;
	const nAn = 'not a number' / 2;
	console.log(infinity);
	console.log(negativeInfinity);
	console.log(nAn);
	
	// bigInt (fairly new, don't use it yet)
	// const bigInt = 1234567890123456789012345678901234567890n; // over (-2*53 ~ 2*53)
	// console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
	Number.MAX_SAFE_INTEGER;
	
	// string
	const char = 'c';
	const brendan = 'brendan';
	const greeting = 'hello ' + brendan;
	console.log(`value: ${greeting}, type: ${typeof greeting}`);
	const helloBob = `hi ${brendan}!`; //template literals (string)
	console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
	console.log('value: ' + helloBob + ' type: ' + typeof helloBob); // 기존 따옴표 방식
	
	// boolean
	// false: 0, null, undefined, Nan, ''
	// true: any other value
	const canRead = true;
	const test = 3 < 1; //false
	console.log(`value: ${canRead}, type: ${typeof canRead}`);
	console.log(`value: ${test}, type: ${typeof test}`);
	
	// null
	let nothing = null;
	console.log(`value: ${nothing}, type: ${typeof nothing}`);
	
	//undefined
	let x;
	console.log(`value: ${x}, type: ${typeof x}`);
	
	// symbol, create unique identifiers for objects
	const symbol1 = Symbol('id');
	const symbol2 = Symbol('id');
	console.log(symbol1 === symbol2); // false
	const gSymbol1 = Symbol.for('id');
	const gSymbol2 = Symbol.for('id');
	console.log(gSymbol1 === gSymbol2); // true
	// console.log(`value: ${symbol1}, type: ${typeof symbol1}`); // String으로 변환 필요
	console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	