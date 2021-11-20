	// JSON
	// JavaScript Object Notation
	
	// 1. Object to JSON
	// stringify(obj)
	let json = JSON.stringify(true);
	console.log(json);
	
	json = JSON.stringify(['apple', 'banana']);
	console.log(json);
	
	const rabbit = {
		name: 'tori',
		color: 'white',
		size: null,
		birthDate: new Date(),
		jump: () => {
			console.log(`${this.name} can jump!`);
		},
	};
	
	json = JSON.stringify(rabbit);
	console.log(json);
	
	json = JSON.stringify(rabbit, ["name", "color"]);
	console.log(json);
	
	json = JSON.stringify(rabbit, (key, value) => {
		console.log(`key: ${key}, value: ${value}`);
		return key === 'name' ? 'moon' : value;
	});
	console.log(json);
	
	
	// 2. JSON to Object
	// parse(json)
	console.clear();
	json = JSON.stringify(rabbit);
	console.log(json);
	const obj = JSON.parse(json);
	const obj1 = JSON.parse(json, (key, value) => {
		console.log(`key: ${key}, value: ${value}`);
		return key === 'birthDate' ? new Date(value) : value;
	});
	console.log(obj);
	console.log(obj1);
	rabbit.jump();
	// obj.jump(); // rabbit을 JSON으로 변환 시 method는 미포함, 다시 object로 변환 시 데이터만 들어감
	
	console.log(rabbit.birthDate.getDate());
	//console.log(obj.birthDate.getDate()); // json 변환 시 Date()가 String이 되면서 Uncaught TypeError 발생
	console.log(obj1.birthDate.getDate());
	
	
	// JSON과 관련된 유용한 웹사이트
	
	// JSON Diff
	// 첫 번째로 받아온 데이터와 두 번째로 받아온 데이터가 무엇이 다른지 모를 때 확인 가능
	// 디버깅하기 좋음
	
	// JSON Beautifier
	// 서버에서 받아온 JSON을 복사해서 붙여넣으면 포멧이 망가지는 경우 발생
	// 간단히 복구 가능
	
	// JSON Parser
	// JSON type을 object 형태로 확인해 보고 싶을 때
	
	// JSON Validator
	// 유효한 JSON 데이터인지 확인 가능
	
