"use strict";

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    return userInput;
  } else {
    console.log("ERROR!!");
  }
};

const getComputerChoice = () => {
  let number = Math.floor(Math.random() * 2);
  if (number === 0) {
    return "rock";
  } else if (number === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!";
    } else if (computerChoice === "scissors") {
      return "User won!";
    } else {
      return "The game tied :(";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won!";
    } else if (computerChoice === "rock") {
      return "User won!";
    } else {
      return "The game tied :(";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won!";
    } else if (computerChoice === "paper") {
      return "User won!";
    } else {
      return "The game tied :(";
    }
  }
};

console.log(determineWinner("paper", "scissors")); // prints something like 'The computer won!'
console.log(determineWinner("paper", "paper")); // prints something like 'The game is a tie!'
console.log(determineWinner("paper", "rock")); // prints something like 'The user won!'

const playGame = () => {
  const userChoice = getUserChoice("scissors");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();

///SLEEP DEBT CALCULATOR

const getSleepHours = (day) => {
  if (day === "Monday") {
    return 8;
  } else if (day === "Tuesday") {
    return 8;
  } else if (day === "Wednesday") {
    return 8;
  } else if (day === "Thursday") {
    return 8;
  } else if (day === "Friday") {
    return 8;
  } else if (day === "Saturday") {
    return 8;
  } else if (day === "Sunday") {
    return 8;
  }
};

console.log(getSleepHours("Saturday"));

const getActualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");

const getIdealSleepHours = () => {
  const idealHours = 6.5;
  return idealHours * 7;
};
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("The user got the perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`The user got more sleep than needed, ${actualSleepHours - idealSleepHours} more`);
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`The user should get some rest and sleep ${idealSleepHours - actualSleepHours}`);
  }
};
calculateSleepDebt();

// TRAINING DAYS | SCOPE
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

const getTrainingDays = (event) => {
  let days;
  if (event === "Marathon") {
    days = 50;
  } else if (event === "Triathlon") {
    days = 100;
  } else if (event === "Pentathlon") {
    days = 200;
  }

  return days;
};

const name2 = "Nala";
const logEvent = (name2, event) => {
  console.log(`${name2}'s event is: ${event}`);
};

const logTime = (name2, days) => {
  console.log(`${name2}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime

logEvent(name2, event);
logTime(name2, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name3 = "Warren";

logEvent(name3, event2);
logTime(name3, days2);

///ARRAYS

let arr16 = ["this is the first element", "this is the second element", "this is the last element"];
console.log(arr16[0]); // logs 'this is the first element'
console.log(arr16[1]); // logs 'this is the second element'
console.log(arr16[arr16.length - 1]); // logs 'this is the last element'

let food = ["cofee", "milk", "eggs", "tomato"];
console.log(food[food.length - 1]); // tomato
console.log(food.splice(1, 2)); // ['milk', 'eggs']
console.log(food); // ['coffe', 'tomato']
console.log(food.slice(0, 1)); // ['cofee']

//SECRET MESSAGE

let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];
console.log(secretMessage.length);

//revome last string
let lastWord = secretMessage.pop();
console.log(secretMessage.length);

//add "to" and "program" at the end
let addWordsAtEnd = secretMessage.push("to", "program");
console.log(secretMessage);

//change 'easily' to 'rigth'
secretMessage[7] = "rigth";
console.log(secretMessage);

//remove the first string
secretMessage.shift();
console.log(secretMessage);

//add 'Programming' to the beginning
secretMessage.unshift("Programming");
console.log(secretMessage);

///revove and replace
let revomedStrings = secretMessage.splice(6, 5);
secretMessage[6] = "know";
console.log(secretMessage);

//another way
//secretMessage.splice(6, 5, 'know');

//join and print message
console.log(secretMessage.join(" "));

/// WHALE TALK TRANSLATOR
let input = "a whale of a deal!";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log('i is ' + i);
  for (let j = 0; j < vowels.length; j++) {
    //console.log('j is ' + j);
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
      if (input[i] === "e" || input[i] === "u") {
        resultArray.push(input[i]);
        break;
      }
    }
  }
}
console.log(resultArray); // ['a', 'a', 'e', 'e', 'o', 'a', 'e', 'e', 'a']
console.log(resultArray.join("").toUpperCase()); // AAEEOAEEA
