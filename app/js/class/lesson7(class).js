{
    // 基本定义和生成实例
    class Parent {
        constructor(name='sjy'){
            this.name = name;
        }
        // getter是属性，而不是方法
        get longName() {
            return 'mk--' + this.name;
        }
        set longName(val) {
            this.name = val;
        }
        // 静态方法，只能通过类调用，而不是通过实例调用
        static tell() {
            console.log('static method');
        }
    }
    Parent.tell();
    // 静态属性
    Parent.type = 'test-type';
    // 继承
    class Child extends Parent {
        constructor(name='child'){
            super(name);
        }
    }
    let child = new Child('kally');
    console.log(child.longName);
    child.longName = 'haha';
    Child.tell();
}