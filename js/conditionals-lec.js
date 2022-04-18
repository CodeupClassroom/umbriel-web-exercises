// Conditionals: Code that runs when we meet certain requirements.

// Today we'll be covering if, if/else, if/else if/else statements, ternary expressions and switch statements.

// IF STATEMENTS - Code that runs when a condition is met.

// if (condition) {
//     this code will run if our condition is true;
// }

/** Consider the sentence: "When I run out of milk, I go to the store to get more." */
// Condition: Out of milk
// Action: Go to the store


/** TO-DO: I want to make a block of code that logs a message to the console when a variable is set to the number 5. */

let five = 5;

// if (five === 5) {
//     console.log("That was indeed 5.");
// }
//
// console.log("Hello!");

// Experiment time


// We can also use our conditional logic in functions.

/** TO-DO: I want to build a function that returns a string when I pass a number as an argument.*/

// console.log(isItANumber(5));
// console.log(isItANumber("sheep"));
// console.log(isItANumber(true));

// IF/ELSE Statements: Code that runs when a condition is met, but will also run with a default state.

// if (condition) {
//     i run when the condition evaluates to true;
// } else {
//     otherwise i run;
// }

/** Consider the following sentence: "If I owned one, I'd get milk from my cow when I ran out. But since
 * I don't, I'll go to the store instead." */

// How would we write this as a if/else code block?

// let ownsCow = true;
//
// if (ownsCow === true) {
//     console.log("Going to milk Bessie!");
// } else {
//     console.log("Going to H-E-B to go get some milk!")
// }


/** TO-DO: Let's expand our previous isItANumber function. Now I want to also return string when we aren't passed a number. How do I refactor our function? */

// function isItANumber(num) {
//     if (typeof num === "number") {
//         return "That is a number!"
//     } else {
//         return "That is not a number!"
//     }
// }

// IF/ELSE IF/ELSE = A chain of if/else statements to give different results for different conditions.

// if (condition1) {
//     run this code;
// } else if (condition2) {
//     since the first condition wasn't met, and the second was, I run;
// } else {
//     since neither the first or second conditions were met, I run by default.
// }

/** Consider the following sentence: "If I owned a cow, I'd get milk from it when I ran out. If I owned a goat, I could get milk from it instead. If I didn't own either, I would go to the store, instead." */

// How would we write this as a if/else if/else code block?

let hasCow = true;
let hasGoat = true;

//
// if (hasCow === true) {
//     console.log("Milking Martha!");
// } else if (hasGoat === true) {
//     console.log("Milking Billie!");
// } else {
//     console.log("Going to Albertson's!");
// }


/** TO-DO: Let's make a function that takes in a number and will return three different strings dependant on whether the
 * argument passed is lesser than, greater than, or equal to 35. */

function isThisThirtyFive(num) {
    if (typeof num !== "number" || isNaN(num)) {
        return "Nope! " + num + " ain't a number!";
    } else if (num > 35) {
        return "Nope! " + num + " is greater than 35!";
    } else if (num < 35) {
        return "Nope! " + num + " is less than 35!";
    } else if (num === 35) {
        return "Yup! " + num + " sure is the number 35!";
    }
}

function thirtyFive(num) {
    return (typeof num !== "number" || isNaN(num)) ? "Nope, not a number" : (num === 35) ? "Yup!" : (num > 35) ? "Nope, too big" : "Nope, too small";
}

// console.log(thirtyFive(35));
// console.log(thirtyFive(36));
// console.log(thirtyFive(34));
// console.log(thirtyFive("banana"));

// console.log(isThisThirtyFive(34));
// console.log(isThisThirtyFive(35));
// console.log(isThisThirtyFive(36));
// console.log(isThisThirtyFive("bananas"));
// console.log(isThisThirtyFive(false));
// console.log(isThisThirtyFive("35"));
// console.log(isThisThirtyFive(NaN));

// TERNARY expression: A expression to set a value based on boolean evaluation.

// let message = (booleanValue) ? "Operation was true." : "Operation was false.";

/** Consider the following statement: "Are we out of milk? If we are: I'll head to the store, but if we
 * do have milk: I want to make a bowl of cereal." */

// How would we write this as a ternary expression?

let doWeHaveMilk = false;

function makePunchBowlOfCereal() {
    return "Chomping down on Sugar Smacks!";
}

function goToStore() {
    return "Going to Auchan!";
}

let action = (doWeHaveMilk) ? makePunchBowlOfCereal() : goToStore();

// console.log(action);

/** TO-DO: Let's look back at the if/else version of our isItANumber function. Let's refactor our if/else as a ternary expression. */

function isItANumber(num) {
    return (typeof num === "number") ? "That is a number!" : "That is not a number!";
}

// SWITCH STATEMENT: A statement with multiple conditions that will trigger based on the value of a variable.

// let pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }



/** Consider the following sentence: "I don't have a cow, goat, or camel. I guess I'll have to go to the
 * store for milk." */

// How would we write this as a switch statement?

// let animalOwned = prompt("What kind of animal (singular) do you own").toLowerCase().trim();
//
// switch (animalOwned) {
//     case "cow":
//         console.log("Milking the cow!");
//         break;
//     case "goat":
//         console.log("Milking the G.O.A.T.");
//         break;
//     case "camel":
//         console.log("Milking the camel... I guess.");
//         break;
//     default:
//         console.log("Alright, fine. I'm headed to Giant Eagle...");
//         break;
// }


/** TO-DO: Let's make a switch statement with a prompt for the user to input their favorite sandwich meat. If they like 'olive loaf' we should return an alert to congratulate them on their bold choice, and if they choose 'brisket' we should return a different alert: this one for congratulating them on the 'right' answer. All other responses should trigger an alert stating apathy. */

// Let's work on the exercise!

function sandwichPreference(str) {
    switch(str) {
        case "olive loaf":
            return "Congratulations on your bold choice";
        case "brisket":
            return "Congratulations on the correct choice";
        default:
            return "Not huge on " + str + ", but hey whatever makes you happy.";
    }
}

let pref = prompt("Hey what kinda lunch meat do you like?").toLowerCase().trim();

alert(sandwichPreference(pref));


















