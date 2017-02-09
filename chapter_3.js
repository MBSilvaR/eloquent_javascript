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
function countBs (string) {
  var counter = 0;
  for (var i = 0; i < string.length; i++){
    if (string[i] === "B") {
      counter += 1;
    }
  }
  return counter;
}
console.log(countBs("BABYBABYBABY"))

// 3.1
function countChar (string, char) {
  var counter = 0;
  for (var i = 0; i < string.length; i++){
    if (string[i] === char) {
      counter += 1;
    }
  }
  return counter;
}
console.log(countChar("krispykreme", "k"))


function isEven(num){

}

























































