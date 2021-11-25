	'use strict';
	
	// JavaScript is synchronous.
	// Execute the cod block in order after hoisting.
	// hoisting: var, function declaration 선언들이 자동적으로 제일 위로 올라감
	
	console.log('1');
	setTimeout(function() { // setTimeout(() => console.log('2'), 1000);
		console.log('2');
	}, 1000);
	console.log('3');
	
	// Synchronous callback
	function printImmediately(print) {
		print();
	}
	printImmediately(() => console.log('hello'));
	
	// Asynchronous callback
	function printWithDelay(print, timeout) {
		setTimeout(print, timeout);
	}
	printWithDelay(()=> console.log('async callback'), 2000);