"use strict";

////MAP////
const animalsX = ["Hen", "elephant", "llama", "leopard", "ostrich", "Whale", "octopus", "rabbit", "lion", "dog"];

// Create the secretMessage array below
const secretMessageX = animalsX.map((first) => {
  return first[0];
});

console.log(secretMessageX.join(""));

////MAP

const bigNumbersX = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbersX = bigNumbersX.map((numberX) => {
  return numberX / 100;
});
console.log(smallNumbersX);

////  FILTER  //////

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter((number) => {
  return number < 250;
});
console.log(smallNumbers);

const favoriteWords = ["nostalgia", "hyperbole", "fervent", "esoteric", "serene"];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter((word) => {
  return word.length > 7;
});
console.log(longFavoriteWords);

//// findIndex //////

const animals = ["hippo", "tiger", "lion", "seal", "cheetah", "monkey", "salamander", "elephant"];

const foundAnimal = animals.findIndex((animal) => {
  return animal === "elephant";
});
console.log(foundAnimal); /// 7
console.log(animals[7]);

const startsWithS = animals.findIndex((animal) => {
  return animal[0] === "s";
});
console.log(startsWithS); ///3
console.log(animals[3]);

/// reduce /// 1 argument ////

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
});
console.log(newSum); // 16

/// reduce /// 2 arguments //// 2nd argument is the initial value

const newNumbersX = [1, 3, 5, 7];
const newSumX = newNumbersX.reduce((accumulatorX, currentValueX) => {
  console.log("The value of accumulator: ", accumulatorX);
  console.log("The value of currentValue: ", currentValueX);
  return accumulatorX + currentValueX;
}, 10);
console.log(newSumX); // 26

//// some filter every ////

const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];

// Something is missing in the method call below

console.log(
  words.some((word) => {
    return word.length < 6;
  })
); // true

// Use filter to create a new array

const interestingWords = words.filter((word) => {
  return word.length > 5;
});
console.log(interestingWords); // ['unique', 'uncanny', 'oxymoron']

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
); /// true

/////// forEach  //////

const cities = ["Orlando", "Dubai", "Edinburgh", "Chennai", "Accra", "Denver", "Eskisehir", "Medellin", "Yokohama"];

cities.forEach((city) => console.log("Have you visited " + city + "?"));

/*
Have you visited Orlando?
Have you visited Dubai?
Have you visited Edinburgh?
Have you visited Chennai?
Have you visited Accra?
Have you visited Denver?
Have you visited Eskisehir?
Have you visited Medellin?
Have you visited Yokohama?
*/

/// filter /////

const longCities = cities.filter((city) => city.length > 7);
console.log(longCities); // ['Edinburgh', 'Eskisehir', 'Medellin', 'Yokohama']

//// reduce /////

const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0];
}, "C");

console.log(word); // CODECADEMY

////
const nums = [1, 50, 75, 200, 350, 525, 1000];

// Choose a method that will return a new array
const smallerNums = nums.map((num) => num - 5);
console.log(smallerNums); // [-4, 45, 70, 195, 345, 520, 995]

// Choose a method that will return a boolean value
// nums.every((num) => num < 0);

console.log(nums.every((num) => num < 0));
// true
