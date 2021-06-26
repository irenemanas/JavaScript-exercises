"use strict";

let o = "I like cheese";
const arrO = o.split(" ");

function popShift(arrO) {
  let popped = arrO.pop();
  let shifted = arrO.shift();
  return [shifted, popped];
}
console.log(popShift(arrO)); // ["I", "cheese"]
console.log(arrO); // ["like"]

//////////////////

let f = "I am using HackerRank to improve programming";
const arrE = f.split(" ");

function getNewString(arrE) {
  let shifted = arrE.shift();
  let using = arrE[1];
  let popped = arrE.pop();
  return [shifted, using, popped];
}
console.log(getNewString(arrE)); // ["I", "using", "programming"]
