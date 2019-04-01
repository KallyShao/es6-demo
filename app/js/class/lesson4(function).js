{
    // 函数参数默认值
    function test (a, b = 3) {
        console.log(a + b);
    }
    test(2, 9);
    test(2);
}

{
    //作用域问题
    let x = 'test';
    function test(x, y=x) {
        console.log(x, y);
    }
    test('kk'); //kk kk。
}

{
    // 函数参数个数不定
    function test(...arg){
        for (let v of arg) {
            console.log(v);
        }
    }
}

{
    // 扩展运算符
    let arr1 = [1, 2];
    let arr2 = [3, 4];
    arr1.push(...arr2);
    console.log(arr1);  // [1, 2, 3, 4]
}