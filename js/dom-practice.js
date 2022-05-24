// TODO: Prompt the user to enter a color. Select the first div with the class of "question", and change the font color to the users input.
// let answer = prompt("Pick a color.");
//
// // let div1 = document.getElementsByClassName("question")[0];
// // console.log(document.getElementsByClassName("question"));
// //
// // div1.style.color = answer;
//
// let divs = document.getElementsByClassName("question");
//
// for (let i = 0; i < divs.length; i++) {
//     if (i === 0) {
//         divs[i].style.color = answer;
//     }
// }

//     DOM Practice Question #1
//     Create an HTML file called dom-practice.html in codeup-web-exercises repos.
// Put a text input on an html page with id of "color"
// Put a button on the page with id of "changeColor"
// Use an Event listener to trigger when the button is clicked.
//         Use the value to change the background-color of the page to match the user's input value.
//         example of input: "#00000", "black", "#FF00FF"

document.getElementById("changeColor").addEventListener("click", function () {
    let color = document.getElementById("color").value;
    document["body"]["style"]["backgroundColor"] = color;
});

// DOM Practice Question #2

// 1. Create a button with the id of addTodo. Create an input of type text with the id of "todo"
// 2. Create an unordered list with the id="todosList"
// 4. When the add button is clicked:
//       a. Make it such that the value from the input is added to a list items.
//          example: <li>input</li> inside of <ul>
//       b. Reset the value in the todo input.
// 5. If the value for the input is empty. Prevent it from creating another <li> element

let todoInput = document.getElementById("todo");
let todoList = document.getElementById("todosList");
let todoBtn = document.getElementById("addTodo");

todoBtn.addEventListener("click", function () {
    if (todoInput.value !== "") {
        let str = "<li>" + todoInput.value + "</li>";
        todoList.innerHTML += str;
        todoInput.value = "";
    }
});
// DOM Practice Question #3

// Part 1:
// Every 1 seconds take the H1 tags and change the font size to 10px.
// If its already 10px set it to 20px;

// Part 2:
// Add a toggle button with id of "toggleH1"
// use that button to stop and restart the h1 tags from changing size.

// Vanilla JS
// const toggleBtn = document.getElementById("toggleH1");
//
// function toggleFontSize() {
//     let h1s = document.getElementsByTagName("h1");
//     for (let h1 of h1s) {
//         if (h1.style.fontSize !== "10px") {
//             h1.style.fontSize = "10px";
//         } else {
//             h1.style.fontSize = "20px";
//         }
//     }
// }
//
// let h1IntervalId = setInterval(toggleFontSize, 1000);
//
// toggleBtn.addEventListener("click", function () {
//     if (h1IntervalId === null) {
//         h1IntervalId = setInterval(toggleFontSize, 1000);
//     } else {
//         clearInterval(h1IntervalId);
//         h1IntervalId = null;
//     }
// });




// jQuery
// const toggleBtn = $("#toggleH1");
//
// function toggleFontSize() {
//     let h1s = $("h1");
//     h1s.each(function () {
//         if ($(this).css("font-size") !== "10px") {
//             $(this).css("font-size", "10px");
//         } else {
//             $(this).css("font-size", "20px");
//         }
//     });
// }
//
// let intervalId = setInterval(toggleFontSize, 1000);
//
// toggleBtn.click(function () {
//     if (intervalId === null) {
//         intervalId = setInterval(toggleFontSize, 1000);
//     } else {
//         clearInterval(intervalId);
//         intervalId = null;
//     }
// });

// DOM Question #4

// When the mouse enters the content area of the 4th div with the class of "question", an alert should pop up
// that reads "CONGRATULATIONS ON YOUR NEW CRUISE!";

// Vanilla JS
// w/ getElementsByClassName
// document.getElementsByClassName("question")[4].addEventListener("mouseenter", function() {
//     alert("CONGRATULATIONS ON YOUR NEW CRUISE!");
// });
// w/ querySelector
// document.querySelector(".question:nth-of-type(5)").addEventListener("mouseenter", function() {
//     alert("CONGRATULATIONS ON YOUR NEW CRUISE!");
// });

// jQuery
// w/ Traversal Methods
// $(".question").first().next().next().next().next().mouseenter(function () {
//     alert("CONGRATULATIONS ON YOUR NEW CRUISE!")
// });
// w/ nth-of-type
$(".question:nth-of-type(5)").mouseenter(function () {
    alert("CONGRATULATIONS ON YOUR NEW CRUISE!")
});





