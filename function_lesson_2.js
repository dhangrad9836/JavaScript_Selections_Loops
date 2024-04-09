//closures- a function that references bindings from local scopes around it
function counter(){
    let count = 0;
    return function increment(){
        //increment the inner scope
        //counter is the outer scope
        //Increment's scope encloses the variable count
        //and can access if after counter is executed
        count++;
        return count;
    };
}

let increment counter();

increment();  // 1
increment();  //2
increment();  //3

//recursion - function that calls itself

function isEven(n){
    // If n is negative, make it positive
    if (n < 0) n = n * -1;

    //If n is 0 after n - 2, even
    //else if n is 1 after n - 2, odd
    //else keep call itself until n is 0 or 1
    if (n == 0){
        return true;
    } else if (n == 1){
        return false;
    } else {
        return isEven(n - 2);
    }
}
isEven(1201); //false

//////////////////////////simpler example
//keep iterating until i is true
for(let i = 0; i < 10; i++){
    console.log(i);
}

//now rewrite using recursion
function countUp(n){
    console.log(n);
    if (n > 0){
        return countUp(n - 1); //this will keep iterating and subtracting 1 everytime
    } else {                //until n is no longer greater than 0
        return n;
    }
}

countUp(10);

//Arrow function converted from function as first class citizens
//function declaration
function subtract(x, y){
    return x - y;
}

//function assign as first class citizen
const subtract = function(x, y){
    return x - y;
}

//arrow function
const subtract = (X, y) => {
    return x - y;
}

//arrow function to implicit return written w/o return statement if has only single expression
const subtract = (x, y) => x - y;








