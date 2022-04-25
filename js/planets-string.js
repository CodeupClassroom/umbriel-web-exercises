(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");

    // const planetsArray2 = Array(planetsString);

    console.log(planetsArray);
    // console.log(planetsArray2);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tag around the entire
     * string, and <li> tags around each planet.
     */

    let planetsWithBreaks = planetsArray.join("<br>");
    console.log(planetsWithBreaks);

    document.body.innerHTML += planetsWithBreaks;

    let planetsUL = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";

    document.body.innerHTML += planetsUL;

})();
