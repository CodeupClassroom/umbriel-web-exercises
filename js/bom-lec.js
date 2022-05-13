(function () {
    // let color = window.prompt("What's your favorite color?");

    // setTimeout(function () {
    //     alert("Howdy! How are ya?");
    // }, 5000);

    // let songSung = 0;

    // let intervalId = setInterval(function () {
    //     songSung++;
    //     console.log(songSung);
    //     alert("This is the song that never ends. It just goes on and on my friends. Somebody started singing not knowing what it was, and now we'll all just keep on singing this because.");
    //     if (songSung >= 5) {
    //         clearInterval(intervalId);
    //     }
    // }, 3000);

    // console.log("Hello?");

    let bankExampleID;
    let logoutID;

    function userActive() {
        console.log("We're good.");
        clearInterval(bankExampleID);
        clearTimeout(logoutID);
        doBanking();
    }

    function doBanking() {
        bankExampleID = setInterval(function () {
            alert("Oops, you're about to be logged out!");
            logoutID = setTimeout(function () {
                window.location = "https://google.com";
            }, 3000);
        }, 7000);
    }

    document.addEventListener("mousemove", userActive);


})();