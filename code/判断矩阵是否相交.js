//
const x = {
  x_min: 3,
  x_max: 4,
  y_min: 5,
  y_max: 9,
};

const y = {
  x_min: 2,
  x_max: 5,
  y_min: 4,
  y_max: 10,
};

// 判断两个矩阵不相交然后取反
function rectRect(a, b) {
  return !(
    a.x_min > b.x_max ||
    a.x_max < b.x_min ||
    a.y_min > b.y_max ||
    a.y_max < b.y_min
  );
}

console.log(rectRect(x, y));


