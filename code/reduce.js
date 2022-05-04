Array.prototype.myReduce = function fn (callbackFn, initialValue) {
  const arr = this;
  const n = arr.length;
  let start = 0;
  if (arguments.length === 1) {
    initialValue = arr[0];
    start = 1;
  }
  let result
  for (let i = start; i < n; i++) {
     result = callbackFn(initialValue, arr[i], i, arr);
    initialValue += arr[i];
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];

console.log(
  arr.reduce(function (prev, cur) {
    return prev + cur;
  })
);
console.log(
  arr.myReduce(function (prev, cur) {
    return prev + cur;
  })
);
