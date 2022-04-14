"use strict";
(function() {




// let price = parseMyStuff(prompt("How much does this thing cost?"));


// function definition (function declaration)
function firstFunction(name) {
    return "Hello " + name;
}

// In an arrow function, the above function looks like:

const firstArrowFunction = (name) => "Hello " + name;

// console.log(firstFunction("Miguel"));
// console.log(firstFunction("Diane"));


// Parsing my stuff in a function
function parseMyStuff(input) {
    return parseFloat(input)
}

// console.log(price);

let maybeString = 5;

function isString(input) {
    return typeof input === "string";
}

// console.log(isString());


function isNumber(input) {
    return typeof input === "number";
}
console.log(isNumber("4"));
console.log(!isNumber("0"));

// function expression
const increment = function(x) {
    return x + 1;
};

// Arrow Function
const myArrowFunction = (firstName, lastName) => {
    firstName = firstName.toUpperCase();
    lastName = lastName.toUpperCase()
    return firstName + " " + lastName;
}


console.log(increment(5));
console.log(myArrowFunction("Jay", "Arredondo"));

// if block
if (true) {
    // Local Variable
    let weekDays = 7
    console.log(weekDays)
} else {
    let weekDays = 4;
}
// Global Variable
let weekDays = 6
// arrow function block
const scopeTest = () => {
    // Local Variable
    let weekDays = 5
    console.log(weekDays)
}

// what should we see here?
console.log(weekDays)

// What value will we see here?

scopeTest();
console.log(scopeTest);

}())
