/**
 * @param {string} s
 * @return {string[]}
 */

function restoreIpAddresses(s) {
  const result = [];
  const n = s.length;

  function recurse(start, fragmentCount, address) {
    if (fragmentCount === 4) {
      if (start === n) {
        result.push(address.slice(1));
      }
      return;
    }
    let str = ''
    for (let i = start; i < start + 3; i++) {
      str += s[i]
      if (Number(str) > 255) break
      recurse(i + 1, fragmentCount + 1, address + '.' + str);
      if (str[0] === '0') break
    }
  }
  recurse(0, 0, '')

  return result
}
