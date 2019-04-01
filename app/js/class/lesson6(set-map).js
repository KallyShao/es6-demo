// set数据结构，属于数组的补充, set中的元素不能重复，添加重复元素不会报错，也不会生效
{
    let list = new Set();
    list.add(5);
    list.add(9);
    console.log(list.size);
    console.log(list);
}

{
    let arr = [1, 1, 9];
    let list = new Set(arr);  // 对set做初始化
}

{
    //使用set去重（只会去除严格意义重复的数据）
    let arr = [1, 1, 2, 2, 2, 33];
    let list = new Set(arr);
    console.log(list);
}

// 其他方法，clear(), delete(), has()

{
    // 遍历
    let arr = [1, 1, 2, 2, 2, 33];
    let list = new Set(arr);
    for(var key of list.keys()) {
        console.log(key);
    }
}

/////////////////weakset, weakset的元素只能是对象；
{
    let weakList = new WeakSet();
    let obj = {};
    weakList.add(obj);
    weakList.add(obj);
    console.log(weakList);
}
/////////////////map数据结构
{
    let map = new Map();
    let arr = ['122'];
    map.set(arr, 129);
    console.log(map);
    console.log(map.get(arr));
}
{
    let map = new Map([['a', 12], ['b', 34]]);
    console.log(map.size);
}
////////////////////weakMap数据结构, key值必须是对象
{
    let weakmap = new WeakMap();
    let o = {};
    weakmap.set(o, 123);
    console.log(weakmap);
}
////////////////////////////////////////与数组，对象的对比（增，删，改，查）
{
    //增
    let map = new Map();
    let arr = [];
    let set = new Set();
    map.set('t', 1);
    map.set('b', 2);
    arr.push({t: 1});
    set.add({t: 1});
    console.log(map);
    console.log(set);
    //查
    map.has('t');
    arr.find(item => item.t);
    //改
    map.set('t', 3);
    arr.forEach(item => {
        if (item.t) {
            item.t = 4;
        }
    });
    //删
    map.delete('t');
    let idx = arr.findIndex(item => item.t);
    arr.splice(idx, 1);
    console.log(arr);
}