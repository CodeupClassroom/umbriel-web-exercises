"use strict";

// Event Listener
    // target.addEventListener(type, callback function)


// CLICK EVENT
document.getElementById("moon-travel").addEventListener("click", function() {
    console.log("This has been clicked.");
    document.getElementById("main-content").style.backgroundImage = "url(../img/moon-surface.png)";
})

// SUBMIT EVENT
document.querySelector("#form").addEventListener("submit", function(event) {
    event.preventDefault();
    // value of target (input)
    let color = document.getElementById("text-color").value;
    console.log(event);
    document.getElementById("main-content").style.color = color;
})

// CHANGE EVENT

document.querySelector("#travel-items").addEventListener("change", function(event) {
    console.log(event);
    // event.target.value = value of option selected.
    document.querySelector(".result").innerText = "I think " + event.target.value + " is important too!";
})

// MOUSE EVENT

let gokuEvent = function() {
    document.querySelector("#goku").src = "img/goku-mad.png";

}

document.querySelector("#goku").addEventListener("mouseenter", gokuEvent)

document.querySelector("#goku").addEventListener("mouseout", function() {
    document.querySelector("#goku").src = "img/goku-normal.png";
})

// REMOVE EVENT
document.querySelector(".goku-chill").addEventListener("click", function() {
    console.log("The button has been clicked.")
    document.getElementById("goku").removeEventListener("mouseenter", gokuEvent)
})

// KEYBOARD EVENT


// keyup - only when a key is released
// keydown - as long as the key is being pushed.

document.addEventListener("keyup", function(event) {
    console.log(event);
    if (event.keyCode === 32) {
        document.querySelector(".space-bar").style.display = "block";
    }
});