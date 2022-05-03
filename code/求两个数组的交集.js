const arr1 = [1, 2, 3, 4, 7, 8, 2]
const arr2 = [2, 4, 1, 3, 5, 2, 9]

function intersection(arr1, arr2) {
  const result = []
  const n1 = arr1.length

  for (let i = 0; i < n1; i++) {
    const item = arr1[i]

    if (arr2.includes(item) && !result.includes(item)) {
      result.push(item)
    }
  }

  return result
}

console.log(intersection(arr1, arr2));

