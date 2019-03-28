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
    // console.log(x);
}
// 使用场景
// 第一 变量交换
// 第二 接收函数返回值
{
    function f() {
        return [1, 2];
    }
    let [a, b] = f();
    console.log(a, b);
}
// 第三 选择性的接收某些值
{
    function f() {
        return [1, 2, 3, 4, 5];
    }
    // let [a, , , b] = f();
    let [a, ...b] = f(); // 或者这样使用
}