"use strict";

(function(){

    document.getElementsByTagName("title")[0].innerHTML = "DOM Lecture";

    const header = document.getElementById("header");

    // header.style.backgroundColor = "#ef0";

    header.innerHTML = "Document Object Model";

    // console.log(header);
    // const grandpa = document.getElementsByClassName("grandpa")[0];
    //
    // console.log(grandpa);
    //
    // for (let node of document.getElementsByTagName("div")) {
    //     console.log(node);
    // }

    const paragraph = document.getElementsByTagName("p")[0];

    const pText = paragraph.innerText;

    console.log(pText);

    paragraph.innerHTML = pText + "<br><img alt='pixel art' src='img/pixel-art.gif'>";

    // console.log(paragraph);
    //
    // const body = document.getElementsByTagName("body")[0];
    //
    // body.innerHTML = "<h1>Victor made me break the Page</h1>";

    const img = document.getElementsByTagName("img")[0];

    console.log(img.hasAttribute("class"));

    if (!img.hasAttribute("class")) {
        img.setAttribute("class", "fancy-gif billboard nice-scenery");
        img.setAttribute("src", "img/pizza.png");
    }

    // img.removeAttribute("class");

    // console.log(img.hasAttribute("class"));
    //
    document.getElementById("login-btn").addEventListener("click", function(e) {
        e.preventDefault();
        let username = document.forms.login.username.value;
        let password = document.forms.login.password.value;
        alert("Username: " + username +"\nPassword: " + password);
    });

})();