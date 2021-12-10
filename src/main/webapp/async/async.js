    // async & await
    // clear style of using promise

    // 1. async
    function fetchUser(){
        // do network request in 10 sec....
        // return 'moon'; <- 사용자는 10초간 기다려야 한다. 이럴 경우 async 사용
        return new Promise((resolve, reject) => {
            // do network request in 10 sec...
            resolve('moon');
        });
    }

    async function fetchUser2(){
        // do network request in 10 sec...
        return 'moon2';
    }

    const user = fetchUser();
    user.then(console.log);
    console.log(user);

    const user2 = fetchUser2();
    user2.then(console.log);

    // 2. await
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function getApple() {
        await delay(1000);
        return 'apple';
    }

    async function getBanana() {
        await delay(1000);
        return 'banana';
    }
    // function getBanana() {
    //     return delay(3000)
    //         .then(() => 'banana');
    // }

    // function pickFruits() {
    //     return getApple()
    //         .then(apple => {
    //             return getBanana()
    //                 .then(banana => `${apple} + ${banana}`);
    //         });
    // }

    async function pickFruits() {
        const apple= await getApple();
        const banana = await getBanana();
        return `${apple} + ${banana}`;
    }

    pickFruits().then(console.log);













