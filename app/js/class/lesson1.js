// 结构赋值：左右一一对应进行赋值
// 数组的结构赋值
{
    let a, b, res;
    [a, b, ...res] = [23, 'x', 8, 3, 0];
    // console.log(a, b, res);
    //这种解构赋值的使用场景：
}
// 对象解构赋值
{
    let {x, y} = { x: 'sjy', y: 18 };  // 前后的Key必须一样
    console.log(x, y);
}