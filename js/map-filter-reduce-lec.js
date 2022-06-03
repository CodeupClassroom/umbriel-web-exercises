var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evens = [];
for (var i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
        evens.push(numbers[i]);
    }
}
console.log(evens); // [2, 4, 6, 8, 10]

const newEvens = numbers.filter((num) => {
    return num % 2 === 0;
});

console.log(newEvens);

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

const tallHamsters = hamsters.filter((hamster) => {
    return hamster.heightInMM >= 100;
});

console.log(tallHamsters);

console.log(hamsters);

console.log(numbers);

const dubNums = numbers.map((number) => number * 2);
console.log(dubNums);

const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

const userIntroductions = users.map((user) => `Hello, my name is ${user.name}, and you can contact me at ${user.email}. I enjoy writing code in the following languages: ${user.languages.join(", ")}.`);

for (let intro of userIntroductions) {
    console.log(intro);
}

const differentNumbers = [34,22,18,99,3];

let biggestNum = differentNumbers.reduce((biggest, num) => {
    // if (biggest < num) {
    //     biggest = num;
    // }
    // return biggest;
    return (biggest > num) ? biggest : num;
}, 0);

console.log(biggestNum);

let tallestHamster = hamsters.reduce((tallOne, hamster, index, arr) => {
    console.log(index);
    console.log(arr);
    return (tallOne.heightInMM > hamster.heightInMM) ? tallOne : hamster;
}, {heightInMM: 0});

// This won't do what we want.
let tallOne = {heightInMM: 0}
let tallestHamsterFilter = hamsters.filter((hamster) => {
    tallOne = (tallOne.heightInMM > hamster.heightInMM) ? tallOne : hamster;
    return tallOne === hamster;
});

const mostColorful = (prev, hamster) => {
    if (prev.fur.length > hamster.fur.length) {
        return prev;
    } else {
        return hamster;
    }
};

let mostColorfulHamster = hamsters.reduce(mostColorful, {fur: []});
let colorfulHamsterMessage = `${mostColorfulHamster.name} is the most colorful hamster, having ${mostColorfulHamster.fur.length} colors in their fur!`

console.log(tallestHamster);
console.log(tallestHamsterFilter);
console.log(mostColorful);
console.log(colorfulHamsterMessage);

const sum = numbers.reduce((accumulation, num) => accumulation + num, 0);

console.log(sum);



