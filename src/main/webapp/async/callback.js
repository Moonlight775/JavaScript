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
	
	// Callback Hell example
	class UserStorage {
		loginUser(id, password, onSuccess, onError) {
			setTimeout(() => {
				if(
					(id === 'moon'  && password === 'dream') ||
					(id === 'coder' && password === 'academy')
				) {
					onSuccess(id);
				} else {
					onError(new Error('not found'));
				}
			}, 2000);
		}
		
		getRoles(user, onSuccess, onError) {
			setTimeout(() => {
				if(user === 'moon') {
					onSuccess({name: 'moon', role: 'admin' });
				} else {
					onError(new Error('no access'));
				}
			}, 1000);
		}
	}
	
	const userStorage = new UserStorage();
	const id = prompt('enter your id');
	const password = prompt('enter your password');
	userStorage.loginUser(
		id,
		password, 
		(user) => {
			userStorage.getRoles(
				user, 
				(userWithRole) => {
					alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
				}, 
				(error) => {
					console.log(error);
				}
			)
		}, 
		(error) => {
			console.log(error);
		}
	)
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	