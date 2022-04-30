function create(o, properties = {}) {
  function dummy() {}
  dummy.prototype = o
  const result = new dummy()
  Object.defineProperties(result, properties)
  return result
}

function Father(name, age) {
  this.name = name;
  this.age = age;
}

Father.sayHello = function () {
  console.log("Hello");
};

Father.prototype.sayHi = function () {
  console.log("Hi");
};

function Son(name, age, sid) {
  Father.call(this, name, age);
  this.sid = sid;
}

Son.prototype = create(Father.prototype, {
  constructor: {
    value: Son,
  },
});

// 将子类的隐式原型指向父类
// 这样子类才能使用父类的静态方法
Object.setPrototypeOf(Son, Father);

const s1 = new Son("s1", 18, 123);
console.log(s1);
s1.sayHi();
