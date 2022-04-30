const arr = [1, 2, 2, 1, 2, 5, 3, 2, 5, 6, 9]

// 使用set
function unique1(arr) {
  return [...new Set(arr)]
}
console.log(unique2(arr));

// for循环加includes
function unique2(arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (result.includes(arr[i])) {
      continue
    }
    result.push(arr[i])
  }

  return result
}
console.log(unique2(arr));

// filter + indexOf
function unique3(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}
console.log(unique3(arr));


