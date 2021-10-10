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
console.log(arrE);

function getNewString(arrE) {
  let shifted = arrE.shift();
  let using = arrE[1];
  let popped = arrE.pop();
  return [shifted, using, popped];
}
console.log(getNewString(arrE)); // ["I", "using", "programming"]

///////////////////

let caca = "I am using HackerRank to improve programming";
const arrH = caca.split(" ");

function getNewStringX(arrH) {
  let newArrH = arrH[0] + " " + arrH[2] + " " + arrH[6];
  return [newArrH];
}
console.log(getNewStringX(arrH)); // ["I using programming"]

/////////////////

function fizzBuzz(n) {
  for (var i = 1; i <= n; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
}
console.log(fizzBuzz(15)); // mirar console

///////
function sockMerchant(n, ar) {
  let sorted = ar.sort((a, b) => a - b);
  let pairs = 0;

  for (let i = 0; i < n - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      pairs++;
      i += 1;
    }
  }

  return pairs;
}
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); // 3

//////
function sockMerchant2(n2, ar2) {
  let socks2 = [];
  let pairs2 = 0;
  for (let element of ar2) {
    socks2[element] = socks2[element] + 1 || 1;
    if (socks2[element] % 2 === 0) {
      pairs2 += 1;
    }
  }
  return pairs2;
}
console.log(sockMerchant2(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); //3
console.log(sockMerchant2(10, [10, 20, 20, 10, 10, 30, 50, 10, 20, 50])); //3

//////

function countingValleys(steps, path) {
  let elevation = 0;
  let valleys = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] === "D") {
      --elevation;
    } else if (path[i] === "U") {
      if (++elevation === 0) valleys++;
    }
  }
  return valleys;
}
console.log(countingValleys(8, "UDDDUDUU"));
console.log(countingValleys(5, "UDDDU"));
//////

function jumpingOnClouds(c) {
  let splittedC = String(c).split(" ");
  for (let i = 0; i < splittedC.length; i++) {
    if (splittedC[i] == 0) {
      splittedC[i] = i;
    } else {
      splittedC[i] = false;
    }
  }
  for (let i = 0; i < splittedC.length; i++) {
    if (splittedC[i] === false) {
      splittedC.splice(i, 1);
    }
    if (splittedC[i] + 2 == splittedC[i + 2]) {
      splittedC.splice(i + 1, 1);
    }
  }
  return splittedC.length - 1;
}

////MAP////
const animals = ["Hen", "elephant", "llama", "leopard", "ostrich", "Whale", "octopus", "rabbit", "lion", "dog"];

// Create the secretMessage array below
const secretMessage = animals.map((first) => {
  return first[0];
});

console.log(secretMessage.join(""));
