console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
  //console.log(i);
  if (i % 2 == 1) {
    console.log(i);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
  //console.log(i);
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i}.."FIZZBUZZ"`);
  } else if (i % 3 == 0) {
    console.log(`${i}.."FIZZ"`);
  } else if (i % 5 == 0) {
    console.log(`${i}.."BUZZ`);
  }
}

// Exercise 3 Section
//ex 1
let i = 1;
while (i <= 100) {
  console.log(i);
  i++;
}
//do while loop
let x = 1;
do {
  console.log(x);
  x++;
} while (x <= 100);

//ex2
let i = 1;
while (i <= 100) {
  //console.log(i);
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i}.."FIZZBUZZ"`);
  } else if (i % 3 == 0) {
    console.log(`${i}.."FIZZ"`);
  } else if (i % 5 == 0) {
    console.log(`${i}.."BUZZ`);
  }
  i++;
}

//do while
let i = 0;
do {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i}.."FIZZBUZZ"`);
  } else if (i % 3 == 0) {
    console.log(`${i}.."FIZZ"`);
  } else if (i % 5 == 0) {
    console.log(`${i}.."BUZZ`);
  }
  i++;
} while (i <= 100);

//exercise 4
let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for (i = 0; i <= n; i++) {
  if (i == value) {
    console.log(`Found value!`);
    break;
  } else {
    console.log(`Did not find value`);
  }
}
