"use strict";
(() => { //  <- ES6 IIFE
    let emptyArr = [];
    let instructors = ["Dane", "David", "Javier", "Jay", "Justin"];

    // Let's log the array to the console!
    console.log(instructors);
    // Let's log out David's name. How can we access that from the instructors array???
    console.log(instructors[1]);
    // What do we get when we access an array at an element beyond what has been defined?
    console.log(instructors[99]);

    console.log(emptyArr.length);
    console.log(instructors.length);

    console.log(instructors.indexOf("Jay"));

    // this will work to replace a value at a specified index within an array
    // instructors[1] =  "David's Wife";
    // console.log(instructors[1]);
    // console.log(instructors);

    // instructors[99] = "Dillon";
    // console.log(instructors);


    // Iterating through arrays
    for (let i = 0; i < instructors.length; i++) {
        console.log("One of your instructors is named: " + instructors[i]);
    }

    for (let i = instructors.length - 1; i >= 0; i-=2) {
        console.log("One of your instructors is named: " + instructors[i]);
    }

    // forEach
    instructors.forEach(function (instructor, index, array) {
        if (index % 3 === 0) {
            console.log("Instructor " + instructor + " can be found in the instructors array at index " + index + ". Oh and here's the array: " + array);
        }
    });

    function introInstructors (instructor, placeInArray) {
        if (placeInArray % 2 === 0) {
            console.log("Nah");
        } else {
            console.log("Hi, my name is " + instructor + " and I work for Codeup.");
        }
    }

    instructors.forEach(introInstructors);

    let index = 0;
    for (let instructor of instructors) {
        console.log(instructor + " at index " + (index++));
    }


})();