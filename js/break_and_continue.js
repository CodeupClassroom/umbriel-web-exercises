"use strict";

(function () {
    let userNum;

    while (true) {
        userNum = parseFloat(prompt("Give me an odd number between 1 and 50, please."));
        if (userNum % 2 !== 0 && userNum >= 1 && userNum <= 50) {
            break;
        }
    }

    for(let j = 1; j <= 50; j += 2) {
        if (j === userNum) {
            console.log("WHOOP! Skipping " + userNum);
            continue;
        }
        console.log(j);
    }
})();