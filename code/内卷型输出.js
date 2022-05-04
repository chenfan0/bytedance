

function print(n) {
  const result = new Array(n).fill(0).map(() => new Array(n).fill(0))
  const count = n * n
  let i = 1
  let rs = 0, re = n, cs = 0, ce = n

  while (rs < re && cs < ce) {
    let row = rs
    let col = cs

    while (col < ce) {
      result[row][col++] = i
      
      if (i === count) {
        return result
      }
      i++
    }
    col--
    row++
    while (row < re) {
      result[row++][col] = i
      
      if (i === count) {
        return result
      }
      
      i++
    }
    row--
    col--
    while (col >= cs) {
      result[row][col--] = i
      
      if (i === count) {
        return result
      }
      i++
    }
    col++
    row--
    while (row > rs) {
      result[row--][col] = i
      
      if (i === count) {
        return result
      }
      i++
    }
    rs++
    cs++
    re--
    ce--
  }
  return result
}

console.log(print(6));
