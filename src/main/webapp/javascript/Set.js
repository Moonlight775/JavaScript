    'use strict';

    // Set은 Map과 비슷하지만, 중복된 값을 허용하지 않는다.
    // 중복되는 값이 생길 수 있다면 Set을 사용
    const set = new Set();
    set.add(1);
    set.add(2);

    set.has(1); //true
    set.has(2); //true
    set.has(3); //false