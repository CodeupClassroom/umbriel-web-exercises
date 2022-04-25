(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    const person = {};

    person.firstName = "Joe";
    person.lastName = "Montana";

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
        return "Hello from " + this.firstName + " " + this.lastName +"!";
    }

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    const shoppers = [
        {name: 'Bob', amount: 180},
        {name: 'Henk', amount: 250},
        {name: 'Alexey', amount: 320}
    ];

    const amountToDiscount = 200;

    function hebDisc() {
        for(let x = 0; x < shoppers.length; x++) {
            if (shoppers[x].amount <= amountToDiscount) {
                console.log(shoppers[x].name + " did not qualify for the discount. Their total today is $" + shoppers[x].amount.toFixed(2) + ".");
            } else {
                let disc = .12 * shoppers[x].amount;
                let total = shoppers[x].amount - disc;
                console.log(shoppers[x].name + " has qualified for a discount of 12%! Original total was $" + shoppers[x].amount.toFixed(2) + ", but they have saved $" + disc.toFixed(2) + " leaving them with a final total of $" + total.toFixed(2) + ".");
            }
        }
    }

    hebDisc();

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    const books = [
        {
            title: "Garfield at Large: His First Book",
            author: {
                firstName: "Jim",
                lastName: "Davis"
            }
        },
        {
            title: "The Hunchback of Notre-Dame",
            author: {
                firstName: "Victor",
                lastName: "Hugo"
            }
        },
        {
            title: "1992 Information Please Sports Almanac",
            author: {
                firstName: "Mike",
                lastName: "Meserole"
            }
        },
        {
            title: "Life is Too Short",
            author: {
                firstName: "Mickey",
                lastName: "Rooney"
            }
        },
        {
            title: "How To Draw Manga",
            author: {
                firstName: "Katy",
                lastName: "Coope"
            }
        }
    ];

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    let i = 1;
    books.forEach(function(book) {
        console.log("Book #" + i++ + "\nTitle: " + book.title + "\nAuthor: " + book.author.firstName + " " + book.author.lastName + "\n//////");
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, author) {
        let authorArr = author.split(" ");
        if (authorArr.length < 2) {
            return {
                title,
                author: {
                    firstName: "",
                    lastName: authorArr[0]
                }
            };
        } else {
            return {
                title,
                author: {
                    firstName: authorArr[0],
                    lastName: authorArr[1]
                }
            }
        }
    }

    let title = prompt("Hey tell your favorite book's title!");
    let author = prompt("And who wrote that?");

    let bookFromPrompt = createBook(title, author);
    console.log(bookFromPrompt);

    const library = [createBook("Garfield Loses His Feet", "Jim Davis"), createBook("Les Miserables", "Victor Hugo")];

    function showBookInfo(book) {
        return "Title: " + book.title + "\nAuthor: " + book.author.firstName + " " + book.author.lastName;
    }

    function showAllBooksInfo(books) {
        let count = 1;
        let str = "";
        for (let book of books) {
            str += "Book #" + count++ + "\n" + showBookInfo(book) + "\n";
        }
        return str;
    }

    for (let book of library) {
        console.log(book);
    }

    console.log(showAllBooksInfo(books));


})();
