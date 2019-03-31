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