"use strict";
console.log("Yay! I completed the warmup!");

// FizzBuzz : Write a program that prints the numbers from 1 to 100. But for multiples
// of three print “Fizz” instead of the number and for the multiples of five print
// “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

function fizzBuzz(limit) {
    if (limit === undefined) {
        limit = 100;
    }

    for (let i = 1; i <= limit; i++) {
        if (i % 15 === 0) {// i % 3 === 0 && i % 5 === 0
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();

// Write a function that takes in an array of strings and returns a string of the first letters of each element concatenated together:

function allFirstLetters(arrOfStrings) {
    let bucket = "";
    for (let str of arrOfStrings) {
        bucket += str.substring(0,1);
    }
    return bucket;
}

const testArrStrings = ['dog', 'cat', 'frog', 'bat'];
console.log(allFirstLetters(testArrStrings));