{
    let obj = {
        time: '2019-04-02',
        name: 'net',
        _r: 123
    };
    // monitor是一个中间对象，最后用户读取的是monitor对象，原始对象obj对用户来说是不可见的
    let monitor = new Proxy(obj, {
        //  拦截对象属性的读取
        get(target, key) {
            return target[key].replace('2019', '2018');
        },
        // 被拦截对象属性的设置
        set(target, key, val) {
            if (key === 'name') {
                return target[key] = val;
            } else {
                return target[key];
            }
        },
        // 拦截对象key in obj操作
        has(target, key) {
            if(key === 'name') {
                return target[key];
            } else {
                return false;
            }
        },
        // 拦截删除
        deleteProperty(target, key) {
            if (key.indexOf('_') > -1) {
                delete target[key];
                return true;
            } else {
                return target[key];
            }
        },
        // 拦截Object.keys, Object.getOwnPropertSymbols....
        ownKeys(target){
            return Object.keys(target).filter(item => item != 'time');
        }
    });
    // monitor.name = '2000';
    // console.log(monitor);
    // console.log('time' in monitor);  //false
    // console.log('name' in monitor); //true
    // delete monitor.time;
    // delete monitor._r;
    // console.log(monitor);
    console.log(Object.keys(monitor)); //[name, _r]，time被过滤掉了
}
//////////////////Reflect：用法和proxy一样
{
    let obj = {
        time: '2019-04-02',
        name: 'net',
        _r: 123
    };
    console.log(Reflect.get(obj, 'time'));
    console.log(Reflect.has(obj, 'name'));
}
///////////////////////////应用：和业务解耦的校验模块
{
    function validator(target, validator){
        return new Proxy(target, {
            _validator: validator,  //保存配置选项？
            set(target, key, value, proxy){
                if (target.hasOwnProperty(key)) {
                    let val = this._validator[key];
                    if(!!val(value)) {
                        return Reflect.set(target,key, vallue, proxy);
                    } else {
                        throw Error(`不能设置${key}到${value}`);
                    }
                }else {
                    throw Error(`${key}不存在`);
                }
            }
        })   
    }
    const personValidators = {
        name(val){
            return typeof val ===  'string';
        },
        age(val){
            return typeof val === 'number' && val > 18;
        }
    };
    class Person {
        constructor (name, age) {
            this.name = name;
            this.age = age;
            return validator(this, personValidators);
        }
    }
    const person = new Person('lilei', 30);
    console.log(person);
    person.name = 90;
}