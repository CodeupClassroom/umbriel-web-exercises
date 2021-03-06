"use strict";

(function () {

    // We can create an object with properties like so!
    let kamea = {
        name: "Kamea",
        location: "San Antonio",
        colors: ["Black", "White"],
        species: "Orca",
        date_of_birth: new Date("12/6/2013")
    };

    // We can also define property values to an object these two ways!
    kamea.age = 8;
    kamea["weight_in_lbs"] = 2400;

    let babyBeluga = {
        name: "Baby Beluga",
        location: "The Deep Blue Sea",
        colors: ["White"],
        species: "Beluga",
        age: 2,
        date_of_birth: new Date("2/6/2020")
    };

    // We can access the properties but using the following syntax.
    console.log(kamea.age);

    console.log(babyBeluga.name + " in " + babyBeluga.location + ", he swim so wild, and he swim so free...");

    // Well, whales are neat and all, but what would be a more practical application for objects?

    const forecast = [
        {
            day: "Monday",
            summary: "Partly cloudy.",
            bearableWeather,
            highsLows: {
                highActual: 78,
                highFeels: 74,
                lowActual: 72,
                lowFeels: 72
            },
            icon: "../img/part_cloud.jpg", // This will make more sense when we start talking about manipulating the page using JS.
            location: {
                lat: 30.2672,
                long: -97.7431,
                city: "Austin",
                state: "TX",
                country: "USA"
            }
        }, {
            day: "Tuesday",
            summary: "Sunny.",
            bearableWeather,
            highsLows: {
                highActual: 99,
                highFeels: 99,
                lowActual: 76,
                lowFeels: 76
            },
            icon: "../img/sunny.jpg",
            location: {
                lat: 30.2672,
                long: -97.7431,
                city: "Austin",
                state: "TX",
                country: "USA"
            }
        }, {
            day: "Wednesday",
            summary: "Rainy.",
            bearableWeather,
            highsLows: {
                highActual: 68,
                highFeels: 66,
                lowActual: 63,
                lowFeels: 62
            },
            icon: "../img/rain.jpg",
            location: {
                lat: 30.2672,
                long: -97.7431,
                city: "Austin",
                state: "TX",
                country: "USA"
            }
        }
    ];

    function bearableWeather() {
        if (this.highsLows.highFeels <= 74 && this.highsLows.lowFeels >= 62 && this.summary !== "Rainy.") {
            return true;
        } else {
            return false;
        }
    }

    // console.log(bearableWeather());

    // Above is an array of weather forecasts, here we can see nested objects within the different objects in the array.

    for (let prediction of forecast) {
        console.log(prediction.day + ": " + prediction.highsLows.highFeels + " | " + prediction.highsLows.lowFeels);
        console.log("Bearable weather: " + prediction.bearableWeather());
    }

    // While we store the different forecasts in an array to hold the information for the three different days, each object has different information in order to store the information for a daily weather forecast.

    // Let's take a look at another object...

    let user = {
        username: "JimLikesEggs",
        password: "this-is-am-good-password",
        avatar_img: 'path/to/file.jpg',
        d_o_b: new Date("Nov 3, 1967")
    };

    // with this user object, let's add a method:

    user.calcAge = function () {
        let today = new Date();
        if (this.d_o_b.getMonth() <= today.getMonth() && this.d_o_b.getDate() <= today.getDate()) {
            this.age = today.getFullYear() - this.d_o_b.getFullYear();
        } else {
            this.age = today.getFullYear() - this.d_o_b.getFullYear() - 1;
        }
        return this.age;
    };

    console.log(user.calcAge());

    // Notice with the method we used the "this" keyword. This allows us to have an object to reference itself when creating a method. It will not work when trying to define a property.

    // user.name = this.username; // This will give an error.
    user.name = user.username;
    //
    console.log(user.name);

})();