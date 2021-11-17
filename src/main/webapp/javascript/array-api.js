	'use strict';
	
	// Q1. make a string out of an array
	{
		const fruits = ['apple', 'banana', 'orange'];
		console.log(fruits.toString());
		const fruitsString = fruits.join(', what ');
		console.log(fruitsString);
	}
	
	// Q2. make an array out of a string
	{
		const fruits = 'apple, kiwi, banana, cherry';
		const result = fruits.split(',');
		console.log(result);
	}
	
	// Q3. make this array look like this: [5, 4, 3, 2, 1]
	{
		const array = [1, 2, 3, 4, 5]; 
		const result = array.reverse(); // array도 바뀌게 된다.
		console.log(result);
		console.log(array);
	}
	
	// Q4. make new array without the first two elements
	{
		const array = [1, 2, 3, 4, 5];
		const result = array.splice(0, 2);	// 배열 자체를 변환
		console.log(result); // [1, 2]
		console.log(array);	 // [3, 4, 5]
		
		const array1 = [1, 2, 3, 4, 5];
		const result1 = array1.slice(2, 5);
		console.log(result1); // [3, 4, 5]
		console.log(array);   // [1, 2, 3, 4, 5]
	}
	
	class Student {
		constructor(name, age, enrolled, score) {
			this.name = name;
			this.age = age;
			this.enrolled = enrolled;
			this.score = score;
		}
	}
	
	const students = [
		new Student('A', 29, true, 45),
		new Student('B', 28, false, 80),
		new Student('C', 30, true, 90),
		new Student('D', 40, false, 66),
		new Student('E', 18, true, 88),
	];
	
	// Q5. find a student with the score 90
	{
//		const result = students.find(function(item, index){ // index는 사용하지 않아 생략가능
//			return item.score === 90;
//		});
		const result = students.find((student) => student.score ===90);
		console.log(result);
	}
	
	// Q6. make an array of enrolled students
	{
		const result = students.filter((student) => student.enrolled);
		console.log(result);
	}
	
	// Q7. make an array containing only the students' scores
	// result should be: [45, 80, 90, 66, 88]
	{
//		const result = students.map(function(item){
//			return item;
//		})
		const result = students.map((student) => student.score); 
		//callback function로 전달되는 인자를 의미없는 item, value 같은 것을 쓰기 보다는 알아보기 쉽게 작성해주는 것이 좋다.
		console.log(result);
	}
	
	// Q8. check if there is a student with the score lower than 50
	{
		const result = students.some((student) => student.score < 50);
		// score가 50 밑인 게 있으면 true로 return
		console.log(result);
		
		const result2 = students.every((student) => student.score < 50);
		const result3 = !students.every((student) => student.score >= 50);
		// 배열의 모든 요소들이 조건을 충족해야지만 true
		console.log(result2);
		console.log(result3);
	}
	console.clear();
	// Q9. compute students' average score
	{
		const result = students.reduce((prev, curr) => {
			console.log('-----------');
			console.log(prev);
			console.log(curr);
			return prev + curr.score;
		}, 0);
		console.log(result);
	}
	// 시작점부터 모든 배열을 돌면서 어떤 값을 누적할 때 사용
	// reduceRight은 배열의 제일 뒤에서 부터 시작
	
	
	
	
	
	
	
	
	
	
	
	
	