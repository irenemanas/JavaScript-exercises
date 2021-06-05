"use strict";

//MAP

var watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster: "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster: "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster: "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster: "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster: "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

const ratings = watchList.map((item) => ({
  title: item["Title"],
  rating: item["imdbRating"],
  year: item["Year"],
  language: item["Language"],
}));
console.log(ratings);

console.log(JSON.stringify(ratings));

/// Implement map on a Prototype
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  var newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function (item) {
  return item * 2;
});
console.log(new_s);

//// MAP & FILTER

var filteredList2 = watchList
  .map((movie) => {
    return {
      title: movie.Title,
      rating: movie.imdbRating,
    };
  })
  .filter((movie) => {
    // return true it will keep the item
    // return false it will reject the item
    return parseFloat(movie.rating) >= 8.0;
  });

console.log(filteredList2);

///SLICE

var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
console.log(newArray);

//// SLICE

function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
console.log(sliceArray(inputAnim, 0, 4));

///SPLICE VS SLICE

function usingSplice(cities) {
  return cities.splice(1, 3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
usingSplice(inputCities);
console.log(usingSplice(inputCities));

function nonMutatingSplice(cities) {
  return cities.slice(0, 3);
}
nonMutatingSplice(inputCities);
console.log(nonMutatingSplice(inputCities));

////SPLICE
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2, 0, "drum");

console.log(myFish); // myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
console.log(removed); // removed is [], no elements removed
///
var myFish2 = ["angel", "clown", "drum", "mandarin", "sturgeon"];
var removed2 = myFish.splice(3, 1);

console.log(myFish2); // removed is ["mandarin"]
console.log(removed2); // myFish is ["angel", "clown", "drum", "sturgeon"]
///
var myFish = ["angel", "clown", "trumpet", "sturgeon"];
var removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]

var myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
var removed = myFish.splice(myFish.length - 3, 2);

// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]

///SLICE
var nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
var masculinos = nombres.slice(1, 3);

// masculinos contiene ['Pedro','Miguel']

///////

var miHonda = { color: "red", ruedas: 4, motor: { cilindros: 4, cantidad: 2.2 } };
var miCoche = [miHonda, 2, "Buen estado", "comprado 1997"];
var nuevoCoche = miCoche.slice(0, 2);

//  Muestra los valores de myCar, newCar y el color de myHonda.
console.log("miCoche = " + JSON.stringify(miCoche));
console.log("nuevoCoche = " + JSON.stringify(nuevoCoche));
console.log("miCoche[0].color = " + miCoche[0].color);
console.log("nuevoCoche[0].color = " + nuevoCoche[0].color);

// Cambia el color de miHonda.
miHonda.color = "azul";
console.log("El nuevo color de mi Honda es " + miHonda.color);

// Muestra el color de myHonda referenciado desde ambos arrays.
console.log("miCoche[0].color = " + miCoche[0].color);

console.log("nuevoCoche[0].color = " + nuevoCoche[0].color);

///REDUCE
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

///REDUCE
const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj);

//// REDUCE FROM WATCHLIST

function getRating(watchList) {
  // Only change code below this line
  var averageRating =
    watchList
      // Use filter to find films directed by Christopher Nolan
      .filter((film) => film.Director === "Christopher Nolan")
      // Use map to convert their ratings from strings to numbers
      .map((film) => Number(film.imdbRating))
      // Use reduce to add together their ratings
      .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
    // Divide by the number of Nolan films to get the average rating
    watchList.filter((film) => film.Director === "Christopher Nolan").length;

  // Only change code above this line
  return averageRating;
}
console.log(getRating(watchList));

/////SWICTH
function sequentialSizes(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High";
      break;
  }
  return answer;
}

sequentialSizes(1);
console.log(sequentialSizes(8));

///
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      return "Marley";
      break;
    case 42:
      return "The Answer";
      break;
    case 1:
      return "There is no #1";
      break;
    case 99:
      return "Missed me by this much!";
      break;
    case 7:
      return "Ate Nine";
      break;
  }

  return answer;
}

chainToSwitch(7);
console.log(chainToSwitch(99));

//// Returning boolean
function isLess(a, b) {
  return a < b;
}
isLess(10, 15);
console.log(isLess(10, 15));
console.log(isLess(30, 15));

///Accessing Object Properties with Variables
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};
var playerNumber = 16;
var player = testObj[playerNumber];
console.log(player);
console.log(testObj[19]);

//Updating Object Properties
var myDog = {
  name: "Bryan",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};
myDog.name = "Bray";
console.log(myDog.name);

///Add properties
const myDoggy = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};
myDog.bark = "woof";
console.log(myDoggy);

///Delete properties
var myBray = {
  name: "Happy Bray",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};
delete myBray.tails;
console.log(myBray);

//// Using Objects for Lookups
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];
  return result;
}

phoneticLookup("charlie");
console.log(phoneticLookup("echo"));

///
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift")); // pony
console.log(checkObj({ city: "Seattle" }, "district")); // Not found

/// Nested objects

var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents); //maps
console.log(myStorage.car.outside.trunk); //jack

///Nrsted Arrays
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

var secondTree = myPlants[1].list[1];
console.log(secondTree); //pine
console.log(myPlants[0].list[2]); //dadelion

/* Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.*/
var recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  if (prop != "tracks" && value != "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));

//While loop
var ourArray = [];
var i = 0;
while (i < 5) {
  ourArray.push(i);
  i++;
}

console.log(ourArray); //[0, 1, 2, 3, 4]

var myArray = [];
var i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
console.log(myArray); //[5, 4, 3, 2, 1, 0]

///for loop
let Arr = [];
for (let index = 0; index <= 7; index++) {
  Arr.push(index);
}
console.log(Arr); //[0, 1, 2, 3, 4, 5, 6, 7]

/////
var myArr = [];
for (let i = 2; i < 6; i++) {
  myArr.push(i);
}
console.log(myArr); // [2, 3, 4, 5]

///EVEN numbers
let ourArray2 = [];
for (let i = 0; i < 10; i += 2) {
  ourArray2.push(i);
}
console.log(ourArray2); // [0, 2, 4, 6, 8]

///ODD numbers
let myArray2 = [];
for (let i = 1; i < 10; i += 2) {
  myArray2.push(i);
}
console.log(myArray2); // [1, 3, 5, 7, 9]

///
let myArray3 = [];
for (let i = 10; i >= 0; i -= 2) {
  myArray3.push(i);
}
console.log(myArray3); // [10, 8, 6, 4, 2, 0]

///
let myArray4 = [];
for (let i = 9; i > 0; i -= 2) {
  myArray4.push(i);
}
console.log(myArray4); // [9, 7, 5, 3, 1]

///Iterate wirh for loop
var myArr = [2, 3, 4, 5, 6];
var total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total);
/////
var arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
//////Product
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
console.log(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ])
); // 5040
console.log(
  multiplyAll([
    [2, 1],
    [2, 3],
  ])
); // 12

////PROFILE LOOKUP
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
lookUpProfile("Akira", "likes");
console.log(lookUpProfile("Akira", "likes")); //["Pizza", "Coding", "Brownie Points"]
console.log(lookUpProfile("Harry", "number")); // 0994372684
console.log(lookUpProfile("Akira", "caca")); // No such property
console.log(lookUpProfile("Irene", "lastName")); // No such contact

///MATH RANDOM
function randomFraction() {
  return Math.random();
}
console.log(randomFraction()); // number between 0 and 1 (1 excluded)
///
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum()); // 8, number betwee 1 and 9 (included)

///
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
console.log(randomRange(13, 15)); // 13, 14 or 15

////parseInt() parses a string and returns an integer
let a = parseInt("007");
console.log(a); // 7
///
function convertToInteger(str) {
  return parseInt(str);
}
convertToInteger("56");
console.log(convertToInteger("56")); // 56

///parseInt with radix
function convertToInteger2(str) {
  return parseInt(str, 2);
}
console.log(convertToInteger2("10011")); // 19

///TERNARY OPERATOR
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);
console.log(checkEqual(1, 2)); // Not Equal
console.log(checkEqual(16, 16)); // Equal

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
checkSign(10);
console.log(checkSign(10)); // positive
console.log(checkSign(-12)); // negative
console.log(checkSign("caca")); // zero

////RECURSION
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [1, 2, 3, 4, 5]

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
console.log(countdown(7)); // [7, 6, 5, 4, 3, 2, 1]

/////
function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
console.log(rangeOfNumbers(3, 9)); // [3, 4, 5, 6, 7, 8, 9]
console.log(rangeOfNumbers(6, 6)); // [6]

//// CONST - FOR LOOP
function printManyTimes(str4) {
  const SENTENCE = str4 + " is cool!";
  for (let i = 0; i < str4.length; i += 2) {
    console.log(SENTENCE);
  }
}
printManyTimes("freeCodeCamp");

//// Mutate and array
const z = [5, 7, 2];
function editInPlace() {
  z[0] = 2;
  z[1] = 5;
  z[2] = 7;
}
editInPlace();
console.log(z); // [2, 5, 7]

//Prevent Object MutationPassed - Object.freeze
let obj1 = {
  name: "FreeCodeCamp",
  review: "Awesome",
};
Object.freeze(obj1);
//obj1.review = "bad";
//obj1.newProp = "Test";
//console.log(obj1); // Cannot assign to read only property 'review' of object '#<Object>'

/// Arrow functions
const myConcat = (arr5, arr6) => arr5.concat(arr6);

console.log(myConcat([1, 2], [3, 4, 5])); // [1, 2, 3, 4, 5]

////
const increment3 = (number, value = 1) => number + value;
// Only change code above this line
console.log(increment3(2, 2)); // 4
console.log(increment3(5)); // 6, default value = 1
