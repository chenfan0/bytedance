// 1123456789 -> 1,123,456,789

function process(s) {
  let result = "";
  const n = s.length;
  let j = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (j === 3) {
      result = "," + result;
      j = 0;
    }
    result = s[i] + result;
    j++;
  }

  return result;
}
console.log(process('1123456789'));
