	'use strict';
	
	// JavaScript is synchronous.
	// Execute the cod block in order after hoisting.
	// hoisting: var, function declaration 선언들이 자동적으로 제일 위로 올라감
	
	console.log('1');
	setTimeout(function() {
		console.log('2');
	}, 1000);
	console.log('3');
