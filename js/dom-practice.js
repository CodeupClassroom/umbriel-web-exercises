
// TODO: Prompt the user to enter a color. Select the first div with the class of "question", and change the font color to the users input.
let answer = prompt("Pick a color.");

// let div1 = document.getElementsByClassName("question")[0];
// console.log(document.getElementsByClassName("question"));
//
// div1.style.color = answer;

let divs = document.getElementsByClassName("question");

for (let i = 0; i < divs.length; i++) {
    if (i === 0) {
        divs[i].style.color = answer;
    }
}

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



