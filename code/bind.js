Function.prototype.myBind = function (thisArgs, ...args) {
  const fn = this;
  thisArgs =
    thisArgs === undefined || thisArgs === null ? globalThis : Object(thisArgs);

  const sym = Symbol();

  thisArgs[sym] = fn;

  return function (...args1) {
    return thisArgs[sym](
      ...(delete thisArgs[sym] ? [...args, ...args1] : [...args, ...args1])
    );
  };
};

function foo(x, y, z) {
  console.log(this);
  console.log(x, y, z);
}

const fn = foo.myBind({}, 1, 2);
fn.myBind({ 1: 1 }, 3)()

const fn1 = foo.bind({}, 1, 2);
fn1.bind({ 1: 1 }, 3)();
