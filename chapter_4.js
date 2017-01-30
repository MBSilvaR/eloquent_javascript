// 1.
function range (start, end) {
  var myArray = [];
  for (var i = 1; i <= end; i++) {
    myArray.push(i);
  }
  return myArray;
}
console.log (range(1,10))

// 1.1
function sum (start, end) {
  var value = 0;
  for (var i = 1; i <= end; i++){
    value += i;
  }
  return value;
}
console.log(sum(1,10))

//1.2
function range (start, end, step) {
  if (step == null) step = 1
  var array = []
  if (step > 0) {
    for (var i = start; i <= end; i += step)
     array.push(i)
  } else {
    for (var i = start; i >= end; i += step)
    array.push(i)
  }
  return array;
}

console.log(range(1,10,2))

