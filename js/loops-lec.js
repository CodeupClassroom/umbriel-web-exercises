"use strict";
// Loops allow us to use repeating logic. Today we'll be talking about three different kinds of loops:
// - While loops
// - Do/While loops
// - For loops

// While loops will run while our condition is true.

// The basic structure of a while loop:
// while (condition === true) {
//  code runs.
// }

// let areWeThereYet;
//
// while(!areWeThereYet) {
//     areWeThereYet = confirm("Are we there yet?");
// }

// In the above example, we'll continue to prompt the user asking if we're there yet until we finally get
// a positive confirmation.

// let haveEmail = confirm("Hey, wanna sign up for discounts?");
// let userEmail;
//
// while(!haveEmail) {
//     haveEmail = confirm("Please?!");
// }
//
// if (haveEmail) {
//     userEmail = prompt("Please input email:");
// }
//
// console.log("Sucker...." + userEmail);
// Notice that much like an if statement, our while loop will only run if the initial condition is met.

/**
 * Audience: "But David, how might I use this loop within a function?"
 * */

// incrementUntilTen will take in a number and loop, incrementing the passed number until it is at least
// equal to 10, returning the number of times the loop was run. If the passed number is greater than or
// equal to 10, it will return the number 0;

function incrementUntilTen(num) {
    let iterations = 0; // number of times the loop has run
    while (num < 10) {
        console.log("Loop iterated.");
        ++num;
        ++iterations;
    }
    return iterations;
}

// console.log(incrementUntilTen(7), "Expected 3"); // 3
// console.log(incrementUntilTen(9), "Expected 1"); // 1
// console.log(incrementUntilTen(27), "Expected 0"); // 0

/**
 * Audience: "But David, surely there are yet more loops to cover?"
 */

// A do/while loop is quite similar to a while loop. The biggest difference is that a do/while loop will
// run at least once.

// do {
//  Code to be run.
// } while (condition)

// Consider:

// while (false) {
//     console.log("will you ever see me?");
// }
//
// do {
//     console.log("But what about me?");
// } while (false);

// Notice that even with a condition that has a boolean value of false, the do while loop will run one time before stopping. *** See diagram in curriculum.

// let's refactor an earlier loop:

// WHILE VERSION
// let areWeThereYetHuh = false;
// let questionAskedXTimes = 0;
//
// while(areWeThereYetHuh === false && questionAskedXTimes < 10) {
//     areWeThereYetHuh = confirm("Are we there yet?");
//     questionAskedXTimes++;
// }
////////////////////////////////////////////////////////////////
// DO/WHILE VERSION

// do {
//     areWeThereYetHuh = confirm("What about now?");
// } while (areWeThereYetHuh === false);


// Notice with our do/while loop that we're able to ask if we're there yet at least once inside the loop
// without having to define the variable outside the loop.

// We can continue to use this logic within a function.

// like our previous function, we are returning the number of times a number was multiplied by the number two to get to greater than 100. This function will always return 1 or greater, as it will always multiply the number by 2 at least once.

function countIterationsMultiplyByTwoUntilGreaterThan100(num) {
    let iterations = 0; // number of times loop has run
    do {
        num *= 2; // num = num * 2;
        console.log(num);
        iterations++;
    } while (num <= 100);
    return iterations;
}


// console.log(countIterationsMultiplyByTwoUntilGreaterThan100(25), "expect 3");
// console.log(countIterationsMultiplyByTwoUntilGreaterThan100(50), "expect 2");
// console.log(countIterationsMultiplyByTwoUntilGreaterThan100(250), "expect 1");

// For loops: Loops that are designed to run a given number of times. Think more math thinking.
// for (let incrementer = 1; incrementer < 10; incrementer++) {
//     console.log("This loop has run " + incrementer + " time(s).");
// }

// The for loop is a bit more verbose as you can see. Let's break down the pieces:
// - iterator initialization - Here we are declaring the variable for our iterator, as well as it's
//      value.
// - condition - The loop will continue to run until this condition is no longer true.
// - iterator change - what happens to the incrementer in once the loop has finished executing the
//      code for a given iteration.

// Once again, we can use this in a function.

// function sayHelloXTimes(num) {
//     for (let j = num; j >= 1; j--) {
//         console.log("Hello!");
//     }
// }

function sayHelloXTimes(num) {
    for (let k = 1; k <= num; k++) {
        console.log("Hello! This loop has ran " + k + " time(s).");
    }
}

// sayHelloXTimes(18);


// Below is a funky example that works, but will rely on moving between different data types.
// for (let i = 1; i < 3; i += 1) {
//     console.log("This is a bit of a tricky way to run a for loop, but hey, it works...");
// }

/**
 * Audience: "But David, there simply must be a way I can get a loop to stop this crazy thing!"
 */

// We can get a loop to stop using break;

// let x = 0;
//
// while (true) {
//     alert("This is the song that never ends. It just goes on and on my friends. Somebody started singing not knowing what it was, and now we'll all just keep on singing this because");
//     x++;
//     if (x === 5) {
//         break;
//     }
// }

// while (true) {
//     let ticketsToMtSplashmore = confirm("Can we get tickets to Mt. Splashmore?");
//     if (ticketsToMtSplashmore){
//         break;
//     }
// }
//
// alert("Thanks Homer, you're the best!");

// for (let j = 5; j < 100000; j += 5) {
//     if (j === 25) {
//         break;
//     }
//     console.log(j);
// }

// Notice that by having the break, we're able to get out of the loop that would otherwise run forever.

/**
 * "But David, what if I don't want it to stop, but merely skip a round"
 */

// we can also use continue to allow a loop to skip an iteration.

function allOddNumbersToX (x) {
    for(let num = 1; num <= x; num++) {
        if (num % 2 === 0) {
            continue;
        }
        console.log(num);
    }
}
// How'd i'd start a function like the one above without continue. Notice that it doesn't allow for odd numbers to appear when we pass it an even number.
function allOddNumbersFromX (x) {
    for (let num = x; num >= 1; num--) {
        if (num % 2 === 0) {
            continue;
        }
        console.log(num);
    }
}
// allOddNumbersToX(17);
// allOddNumbersToX(18);
// allOddNumbersFromX(18);

// The above function will only log the odd numbers until the argument passed.



let inventory = Math.floor(Math.random() * 51) + 50;
let halfSold = inventory/2;

do {
    let customerBuysCandy = Math.floor(Math.random() * 50) + 1;
    console.log("Customer has ordered " + customerBuysCandy + " pieces of candy.\nWe have " + inventory + " left in stock.");
    if (customerBuysCandy > inventory) {
        console.log("We cannot fulfil this order. Whoopsies.");
        continue;
    }
    inventory -= customerBuysCandy;
    console.log("Order fulfilled. " + inventory + " piece(s) of candy left in stock.");
} while (inventory > halfSold);

console.log("Time to close up shop! Whew... what a day.");