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

    callSomething(add);