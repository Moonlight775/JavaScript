    // 함수 선언
    function doSomething() {
        console.log('hello');
    }

    function add(a, b) {
        const sum = a + b;
        return sum;
    }

    // 함수 호출
    doSomething();

    const result = add(1, 2);
    console.log(result);

    function callSomething(add) {
        console.log(add);
        const result = add(2, 3);
        console.log(result);
    }

    //callSomething(add);

    const addFun = add; // addFun이라는 상수변수에 add라는 함수의 이름만 할당하면 addFun은 함수 자체만 가리키고 있다.
    console.log(addFun);
    addFun(1, 2);   // 함수 호출

