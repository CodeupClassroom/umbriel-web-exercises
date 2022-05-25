$.get("/data/library.json").done(function (books) {
    $("#books").html("");
    books.forEach(function(book) {
        var h1 = "<h1>" + book.title + "</h1>";
        var p = "<p>By: " + book.author + "</p>"
        $("#books").append(h1 + p);
    });
});