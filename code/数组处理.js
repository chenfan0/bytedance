// a=[1,[2,[3,[4,null]]]], 实现数组 b=[4,[3,[2,[1,null]]]]

function process(list, help = []) {
  help.push(list[0]);
  if (Array.isArray(list[1])) {
    process(list[1], help);
  }
  list[0] = help.shift();

  return list;
}
console.log(JSON.stringify(process([1, [2, [3, [4, null]]]])));


// fn([['a', 'b'], ['n', 'm'], ['0', '1']]) => ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm0']

function process1(arr) {
  const result = []

  function recurse(index, str) {
    if (index === arr.length) {
      result.push(str)
      return
    }

    const end = arr[index].length

    for (let i = 0; i < end; i++) {
      recurse(index + 1, str + arr[index][i])
    }
  }
  recurse(0, '')
  return result
}

console.log(process1([['a', 'b'], ['n', 'm'], ['0', '1']]))
