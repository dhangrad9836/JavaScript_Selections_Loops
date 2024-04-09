//defining function will assign the result to a variable
const add = function (a, b) {
  return a + b;
};

//declare function
function isEven(n) {
  if (n % 2 == 0) {
    return true;
  }
  return false;
}

function greet(name) {
  console.log(`Hello ${name}`);
}

//invoke/call the function
greet("John");

///////
function add(x, y) {
  return x + y;
}
let sum = add(1, 1);
console.log(sum);

///////////////
function sbuilder(sentence, verb, object, noun) {
  return `${sentence} ${verb} with ${object} and ${noun}.`;
}

let sentence = sbuilder("Seth", "travelled", "laptop", "Goku");

let paragraph =
  sentence + " " + sbuilder("Cameron", "played", "orange", "tree");

console.log(paragraph);
