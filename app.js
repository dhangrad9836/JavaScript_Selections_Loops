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
