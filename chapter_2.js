// 1.
var min = function (x,y) {
if (x < y) {
  return x;
} else {
  return y;
}
}
console.log(min(-34,2))

//or
var min = function (x,y) {
  return Math.min (x,y);
}
console.log(min(5,3));



// 2.
var isEven = function (num) {
  num = Math.abs(num);
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  }
  return (num - 2);
}
console.log(isEven(-1))



// 3.


