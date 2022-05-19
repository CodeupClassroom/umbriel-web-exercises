$(function() {
    $("#jake-weary").css({ "border": "4px darkslategrey solid", "margin": "20px" });
    $("li").css("color", "red");

    console.log($("li"));

    $("ul, p").css("background", "hotpink");

    $("nav>ul li:nth-of-type(3)").css("color", "blue").addClass("cool-class")


    // $("*").html("");

    // document.getElementsByTagName("li").style.color = "blue";

});