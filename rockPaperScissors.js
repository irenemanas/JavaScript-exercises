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

///////
let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];

let storyWords = story.split(" ");
//console.log(storyWords);
console.log(storyWords.length); //188

let betterWords = storyWords.filter((word) => !unnecessaryWords.includes(word));
console.log(betterWords.length); //182

for (let i = 0; i < storyWords.length; i++) {
  if (storyWords[i] === overusedWords[i]) {
    console.log(storyWords.length - overusedWords.length);
  }
}

let totalTimes = 0;
for (let word = 0; word < betterWords.length; word++) {
  if (betterWords[word] === "really") {
    totalTimes = totalTimes + 1;
  } else if (betterWords[word] === "very") {
    totalTimes = totalTimes + 1;
  } else if (betterWords[word] === "basically") {
    totalTimes = totalTimes + 1;
  }
}
console.log(totalTimes);

let sentences = 0;
let array = story.split(" ");
//console.log(array);
array.forEach((word) => {
  if (word[word.length - 1] === "." || word[word.length - 1] === "!") {
    sentences += 1;
  }
});
console.log(array.length); //188
console.log(sentences); //12

///
const randomNums = [1, 123, 25, 90, 3543, 42];
const foundElement = randomNums.findIndex((num) => num > 200);
console.log(foundElement); // 4
