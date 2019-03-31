{
    let num = Number.isFinite(15/0);
    // console.log(num);
    console.log(Number.isFinite(NaN)); //false
}

{
    // 判断是否整数
    console.log(Number.isInteger(12));   //true
    console.log(Number.isInteger(12.0));  //true
    console.log(Number.isInteger('12.0'));  //false
}

{
    //表示2的53次方和2的负53次方的两个端点，js中存储的数如果超过这2个端点，就会不准确
    console.log(Number.MAX_SAFE_INTEGER); 
    console.log(Number.MIN_SAFE_INTEGER); 
    Number.isSafeInteger(10); //判断一个数是否在安全范围
}

{
    // 取一个小数中的整数部分
    Math.trunc(4.1);  //4
    Math.trunc(4.9);  //4
}

{
    // 判断一个数字是正数，负数还是0？？？？？？
    console.log(Math.sign(-5));  // -1
    console.log(Math.sign(0)); // 0
}

{
    // 立方根运算
    Math.cbrt(9);
}