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

//2.
function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}
console.log(reverseArray([1,2,3]))

//2.1
function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);


