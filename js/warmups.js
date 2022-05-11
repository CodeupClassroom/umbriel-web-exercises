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

// fizzBuzz();

// Write a function that takes in an array of strings and returns a string of the first letters of each element concatenated together:

function allFirstLetters(arrOfStrings) {
    let bucket = "";
    for (let str of arrOfStrings) {
        bucket += str.substring(0,1);
    }
    return bucket;
}

const testArrStrings = ['dog', 'cat', 'frog', 'bat'];
// console.log(allFirstLetters(testArrStrings));


// Write a function that takes in a string and returns that string in alphabetical order.

function alphabetize(str) {
    // let strArray = str.split('');
    // console.log(strArray)
    // let sortedArray = strArray.sort()
    // console.log(sortedArray);
    // return sortedArray.join('');
    return str.split('').sort().join('');
}

// console.log(alphabetize("codeup"));

//  Write a function that takes in an array of numbers and returns the sum of all elements.

function sumOfElements(arrOfNums) {
    let bucket = 0;
    for (let i = 0; i < arrOfNums.length; i++) {
        bucket += arrOfNums[i];
    }
    return bucket;
}

// console.log(sumOfElements([1,2,3,4,5]));
// console.log(sumOfElements([19,27,44,3]));




// Create a function, returnProductEssentialDetails, that takes in a product object and returns a simpler product object containing only the product name and price in cents.

    // Examples...

let product1 = {
    name: 'Hammer',
    priceInCents: 400,
    description: 'It is a hammer.',
    inventory: 25034
}

let product2 = {
    name: 'Computer',
    priceInCents: 40000,
    description: 'It is a computer.',
    inventory: 33000
}

let product3 = {
    name: 'Ruler',
    priceInCents: 1000,
    description: 'It is a ruler.',
    inventory: 2200
}


function returnProductEssentialDetails(product) {
    return {
        name: product.name,
        priceInCents: product.priceInCents
    }
}


let products = [product1, product2, product3];

function returnAllProductsEssentialDetails(products) {
    let productsOutput = [];
    products.forEach(function(product) {
        productsOutput.push(returnProductEssentialDetails(product));
    });
    return productsOutput;
}

console.log(returnAllProductsEssentialDetails(products));


// console.log(returnProductEssentialDetails(product1)); // returns...

/*

    {
        name: 'Hammer',
        priceInCents: 400
    }

*/


// console.log(returnProductEssentialDetails(product2)); // returns...

/*

    {
        name: 'Computer',
        priceInCents: 40000
    }

*/


// console.log(returnProductEssentialDetails(product3)); // returns...

/*

    {
        name: 'Ruler',
        priceInCents: 1000
    }

*/


//
// BONUS (if time permits)
//
// Create a function, returnAllProductsEssentialDetails, that takes in an array of product objects and returns an array of product objects containing only the essential details of the product name and price in cents.


// Write a function that will accept an array of objects and return the tallest object from the array.

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function returnTallestHamster(hamsters) {
    let tallest = {heightInMM: 0};
    for (let hamster of hamsters) {
        if (hamster.heightInMM > tallest.heightInMM) {
            tallest = hamster;
        }
    }
    return tallest;
}

function returnTallestHamsterFor(arr) {
    let tallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].heightInMM > tallest.heightInMM) {
            tallest = arr[i];
        }
    }
    return tallest;
}

console.log(returnTallestHamster(hamsters));

function mostColorful(hamsters) {
    let mostColors = {fur : []};
    for (let hamster of hamsters) {
        if (hamster.fur.length > mostColors.fur.length) {
            mostColors = hamster;
        }
    }
    return mostColors;
}

function mostColorfulFor(hamsters) {
    let mostColors = hamsters[0];
    for (let x = 1; x < hamsters.length; x++) {
        if (hamsters[x].fur.length > mostColors.fur.length) {
            mostColors = hamsters[x];
        }
    }
    return mostColors;
}

// console.log(mostColorfulFor(hamsters));

// Write a function that will accept a string. It should return an object with the following properties: string, size, containsLetterFromRSTLNE, and isOneWord.

function makeObjectFromString(str) {
    const obj = {};
    obj.string = str;
    obj.size = str.length;
    obj.isOneWord = str.indexOf(" ") < 0;
    let lc = str.toLowerCase();
    if (lc.includes("r") || lc.includes("s") || lc.includes("t") || lc.includes("l") || lc.includes("n") || lc.includes("e")) {
        obj.containsLetterFromRSTLNE = true;
    } else {
        obj.containsLetterFromRSTLNE = false;
    }
    return obj;
}

console.log(makeObjectFromString('tacocat'));
console.log(makeObjectFromString('John Jacob'));