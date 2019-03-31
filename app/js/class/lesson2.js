// 字符串方法，扩展了对unicode的处理方法
{
    console.log('a', '\u0061'); //\u0061 表示字符串a
    // unicode编码大于0xFFFF时，也就是超过了5个16进制位
    console.log('s', '\u{20BB7}');
}
{
    let s = '𠮷';
    console.log(s.length); //2. 因为s的码值大于2个字节？？？
    console.log(s.charAt(0)); //乱码，这是es5的处理方法
    console.log(s.charCodeAt(0)); //
}
// es6的处理方法
{
    let s = '𠮷';
    // console.log(s.codePointAt(0));
    // console.log(s.codePointAt(0).toString(16));// 20bb7.
}
{
    // console.log(String.fromCharCode('0x20bb7')); 
    // console.log(String.fromCodePoint('0x20bb7'));
}
/////////////////////////////常用api
{
    //很常用的字符串遍历api：for...of...
    let str = '\u{20bb7}abc';
    for (let code of str){
        console.log(code);
    }
}
{
    let s =  'string';
    // console.log(s.includes('r')); //判断是否包含r
    // console.log(s.startsWith('str')); //判断是否以str开始
    // console.log(s.endsWith('g')); //是否以g结束
}
{
    let s = 'abc';
    // console.log(s.repeat(2)); //重复2次
}
{
    // console.log('1', padStart(2, '0')); //补全，在前面补，暂时支持性很小
    // console.log('1', padEnd(2, '0'));
}
// 标签模板，第一个功能是可以用于转换html标签，防止xss攻击；第二是用于多语言转换
{
    let user = {
        name: 'list',
        info: 'hello world'
    };
    abc`i am ${user.name}, ${user.info}`;
    function abc(s, v1, v2) {
        console.log(s, v1, v2);
    }
}
{
    console.log(String.raw`Hi\n${1+2}`);  //这里的\n不会被解析为换行，使用频率不高
    console.log(`Hi\n${1+2}`);
}