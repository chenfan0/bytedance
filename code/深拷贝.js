const obj = {
  name: 'aaa',
  others: [1, 2, 3, 4],
  null: null
}
obj.self = obj

function deepClone(value, weakMap = new WeakMap()) {
  if (typeof value !== 'object' || value === null) {
    return value
  }
  if (weakMap.has(value)) {
    return weakMap.get(value)
  }

  const newValue = Array.isArray(value) ? [] : {}
  weakMap.set(value, newValue)
  const keys = Object.keys(value)

  for (const key of keys) {
    newValue[key] = deepClone(value[key], weakMap)
  }

  return newValue
}

const obj2 = deepClone(obj)
console.log(obj2);

