// f(['ab', 'c', 'd', 'ab', 'c']) => ['ab1', 'c1', 'd', 'ab2', 'c2']

const arr = ['ab', 'c', 'd', 'ab', 'c', 'ab', 'c', 'f']

function process(arr) {
  const map = new Map()

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]

    const count = (map.get(item) || 0) + 1
    arr[i] = item + count
    map.set(item, count)
  }

  return arr
}

console.log(process(arr));