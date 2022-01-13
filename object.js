"use strict";

////Methods: When the data stored on an object is a function we call that a method.

let retreatMessage = "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

const alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};

alienShip.retreat();
alienShip.takeOff();

///// Nested Objects

let spaceship = {
  passengers: [{ name: "Irene" }, { name: "Bruchi" }],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

const capFave = spaceship.crew.captain["favorite foods"][0];

const firstPassenger = spaceship.passengers[0];
console.log(firstPassenger);

///Pass By Reference

let spaceshipX = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};

const greenEnergy = (obj) => {
  obj["Fuel Type"] = "avocado oil";
};

const remotelyDisable = (obj) => {
  obj.disabled = true;
};

greenEnergy(spaceshipX);
remotelyDisable(spaceshipX);

console.log(spaceshipX);

/////Looping Through Objects

let spaceshipY = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

// Write your code below
for (let crewMember in spaceshipY.crew) {
  console.log(`${crewMember}: ${spaceshipY.crew[crewMember].name}`);
}
/*  captain: Lily
    chief officer: Dan
    medic: Clementine
    translator: Shauna
*/

for (let crewMember in spaceshipY.crew) {
  console.log(`${spaceshipY.crew[crewMember].name}: ${spaceshipY.crew[crewMember].degree}`);
}
/*  Lily: Computer Engineering
    Dan: Aerospace Engineering
    Clementine: Physics
    Shauna: Conservation Science        
*/

const robot = {
  model: "SAL-1000",
  mobile: true,
  sentient: false,
  armor: "Steel-plated",
  energyLevel: 75,
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys); /// [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);
/* [ [ 'model', 'SAL-1000' ],
[ 'mobile', true ],
[ 'sentient', false ],
[ 'armor', 'Steel-plated' ],
[ 'energyLevel', 75 ] ] */

// Declare newRobot below this line:

const newRobot = Object.assign({ laserBlaster: true, voiceRecognition: true }, robot);
console.log(newRobot);
/* { laserBlaster: true,
  voiceRecognition: true,
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75 } */

/////
// declare kelvin variable
const kelvin = 0;
//declare celsius variable
const celsius = kelvin - 273;
//declare fahrenheit variable
let fahrenheit = celsius * (9 / 5) + 32;
//round the fahrenheit numbre
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`); // The temperature is -460 degrees Fahrenheit.

// Convert to Newton
let newton = celsius * (33 / 100);
// Round down
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`); // The temperature is -91 degrees Newton.

/////////

//Create myAge variable
const myAge = 20;
//Create earlyYears variable
let earlyYears = 2;
earlyYears *= 10.5;
//Create laterYears variable
let laterYears = myAge - 2;
//Assign new value to laterYears
laterYears *= 4;

console.log(earlyYears); // 21
console.log(laterYears); // 72

//variable named myAgeInDogYears
const myAgeInDogYears = earlyYears + laterYears;

const myName = "Irene".toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);

/* My name is irene. I am 20 years old in human years which is 93 years old in dog years. */
