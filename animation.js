let pos = 0;

//our box element
const box = document.getElementById("box");
const t = setInterval(move, 10);

function move() {
  if (pos >= 150) {
    clearInterval(t);
  } else {
    pos += 1;
    box.style.left = pos + "px";
  }
}

//our button

const button = document.getElementById("button");
function show() {
  alert("Hi there");
}

//our button1

const button1 = document.getElementById("button1");
button1.onclick = function () {
  document.body.innerHTML = Date();
};

//our text input
function change() {
  var myInput = document.getElementById("name");
  myInput.value = myInput.value.toUpperCase();
}

//our btn eventlistener

const btn = document.getElementById("demo");
btn.addEventListener("clik", myFunction);

function myFunction() {
  alert(Math.random());
  btn.removeEventListener("click", myFunction);
}
///for of

for (let ch of "Sololearn") {
  console.log(ch); // S o l o l e a r n
}

let list = ["x", "y", "z"];
for (let val of list) {
  console.log(val); // x y z
}

//forEach ***No imprime nada en consola

const printOdds = (arr30) => {
  arr30.forEach((el) => {
    if (el % 2 != 0) console.log(el);
  });
};

//default
const test = (a, b = 3, c = 42) => {
  return a + b + c;
};
console.log(test(5)); //50

//ES6 object

let car = {
  speed: 40,
  accelerate() {
    this.speed += 10;
  },
};
car.accelerate();
car.accelerate();
console.log(car.speed); //60

car.accelerate();
console.log(car.speed); //70

///What is the output of this code?

const objX = {
  a: 0,
  b: 2,
  c: 4,
};
const objY = Object.assign({ c: 5, d: 6 }, objX);
console.log(objY.c, objY.d); // 4 6

//Rest parameter ...
//What is the output of the following code?
function magic(...nums) {
  let sum = 0;
  nums.filter((n) => n % 2 == 0).map((el) => (sum += el));
  return sum;
}
console.log(magic(1, 2, 3, 4, 5, 6)); // 12 suma 2+4+6

// map
//What is the output of this code?
const map = new Map();
map.set("one", 1);
map.set("2", "two");
if (map.has("two")) {
  console.log("two");
} else {
  console.log(map.get("one")); // 1
}

///FINAL PROBLEM Sololearn

class Add {
  constructor(...words) {
    this.words = words;
  }
  //your code goes here
  print() {
    let y9 = "";
    for (x9 of this.words) {
      if (x9 == ",") {
        x9 = "";
      } else {
        y9 += "$" + x;
      }
    }

    y9 = y9 + "$";
    console.log(y9);
  }
}
var x9 = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y9 = new Add("this", "is", "awesome");
var z9 = new Add("lorem", "ipsum", "dolor", "sit", "amet", ",", "consectetur", "adipiscing", "elit");
x9.print();
y9.print();
z9.print();
