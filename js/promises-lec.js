"use strict";
(function () {
    /********* Promises *********/
    // What is a Promise?
    // A Promise is a javascript object promises a value that has not yet been determined.
    // Since it is an asynchronous event, there are three states of a Promise object.

    /*
    *  Pending - neither resolved or rejected, waiting for a response.
    *  Resolved - the operation was completed successfully
    *  Rejected - the operation failed.
    */

    /******** FETCH API *********/

    // The Fetch API is similar to jQuery AJAX requests, but is built into the Javascript
    // language, meaning that we don't need to include an external library just to make requests.

    // fetch(url , { configurationObject })

    // Fetch returns a Promise object with details about the request.
    // console.log(fetch("https://randomuser.me/api/"));


    fetch("https://randomuser.me/api/")
    // Once we receive a response, we use the .then() method to determine what will happen next.
    // The .then() method accepts a callback function, with instructions of what to do with the
    // data we received. By default, a fetch request will return the data in an XML format.
    // Therefore, we need to use the .json() method to convert the data into a javascript object.
    .then((resp) => resp.json())
    // After we have converted the Promise to a Javascript object, log the data to the console.
    .then((data) => console.log(data))
    // The .catch() method accepts a callback function, with instructions of what to do
    // when a request has failed. Here, we'll log the error to the console.
    .catch(error => console.log(error));

})
();