
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