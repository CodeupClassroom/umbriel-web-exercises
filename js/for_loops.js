(() => {

    function showMultiplicationTable(num) {
        for (let p = 1; p <= 10; p++) {
            console.log(num + " x " + p + " = " + (num * p));
        }
    }

    function showMultiplicationTableAsOneString(num) {
        let str = ""
        for (let p = 1; p <= 10; p++) {
            str += (num + " x " + p + " = " + (num * p)) + "\n";
        }
        return str;
    }


    showMultiplicationTable(7);
    console.log(showMultiplicationTableAsOneString(7));

    //

    function tenRandomNumbersEvenOrOdd() {
        for (let j = 1; j <= 10; j++) {
            let randomNum = Math.floor(Math.random() * 181) + 20;
            if (randomNum % 2 === 0) {
                console.log("Wowie zowie! " + randomNum + " is an even number!");
            } else {
                console.log("Jeepers! " + randomNum + " sure is one odd number!");
            }
        }
    }

    tenRandomNumbersEvenOrOdd();

    //

    function numberPyramid() {
        for (let y = 1; y < 10; y++) {
            let str = "";
            for(let x = 1; x <= y; x++) {
                str += y; // str = str + y;
            }
            console.log(str);
        }
    }

    numberPyramid();


    function numberPyramidDeux() {
        for (let z = 1; z < 10; z++) {
            console.log(z.toString().repeat(z));
        }
    }

    numberPyramidDeux();

    //

    function countingDownByFives(startingVal) {
        for (startingVal; startingVal > 0; startingVal -= 5) {
            console.log(startingVal);
        }
    }

    countingDownByFives(100);
})();