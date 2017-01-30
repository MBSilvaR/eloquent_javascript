// 1.
var t = "";
for (var i = 0; i <= 7; i++){
  t += "#"
  console.log(t)
}


// 2.
for (var i = 1; i <= 100; i++){
if (i % 3 === 0 && i % 5 === 0) {
  console.log("fizzbuzz");
} else if (i % 3 === 0 ){
  console.log("fizz");
} else if (i % 5 === 0 ){
  console.log("buzz");
} else {
  console.log(i);
}
}


// 3.
var size = 8;
var board = "";

for (var y = 0; y < size; y++){
  for (var x = 0; x < size; x++){
    if ((x+y) % 2 === 0)
    // {
      board += " ";
    // }
    else
    // {
      board += "#";
    // }
  }
  board += "\n";
}
console.log(board);
