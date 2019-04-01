{
    let a = Symbol();
    console.log(a);
    let a1 = Symbol.for('a1');
    let a2 = Symbol.for('a1');
    console.log(a1);
    console.log(a1 === a2); //true
}

{
    // 使用场景
    let a1 = Symbol.for('abc');
    let obj = {
        [a1]: '123',
        'abc': 233,
        'c': 2
    };
    // 注意：通过symbol声明的Key，无法通过for..in, for..of遍历，而是要通过Object.getOwnPropertySymbols(obj)获取
    for(let [key, val] of Object.entries(obj)) {
        console.log(key, val);
    }
    Object.getOwnPropertySymbols(obj).forEach(function(item){
        console.log(obj[item]);
    })
    // 使用reflect对象可以同时拿到普通Key和symbol key的值
    Reflect.ownKeys(obj).forEach(function(item){
        console.log(item, obj[item]);
    });
}