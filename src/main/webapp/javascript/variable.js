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