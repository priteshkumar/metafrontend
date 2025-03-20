/*

You might already know, that a spread operator in JavaScript, is used to unpack a box, for example, to unpack an array. 
The rest operator, on the other hand, is used to build a smaller box, and pack items into it
*/

//assign values from 2 arrays into another array using spread op
function spreadOpcreateArr() {
  let a = [10, 20, 30];
  let b = [40, 50, 60];
  let c = [...a, ...b];
  console.log(c);
}

spreadOpcreateArr();

function addAll(a, b, c) {
  return a + b + c;
}

//spread operator can be used in
//Passing Array Elements as Function Parameters
var arr = [2, 3, 4];
var res = addAll(...arr);
console.log(res);


//rest op

You might already know, that a spread operator in JavaScript, is used to unpack a box, for example, to unpack an array. The rest operator, on the other hand, is used to build a smaller box, and pack items into it
