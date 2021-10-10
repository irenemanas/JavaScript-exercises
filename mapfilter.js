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
