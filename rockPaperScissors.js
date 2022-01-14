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
