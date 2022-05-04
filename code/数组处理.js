// a=[1,[2,[3,[4,null]]]], 实现数组 b=[4,[3,[2,[1,null]]]]

function process(list, help = []) {
  help.push(list[0]);
  if (Array.isArray(list[1])) {
    process(list[1], help);
  }
  list[0] = help.shift();

  return list;
}

console.log(JSON.stringify(process([1,[2,[3,[4,null]]]])));
