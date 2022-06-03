const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const usersWhoKnowAtLeastThreeLanguages = users.filter((user) => user.languages.length >= 3);

console.log(usersWhoKnowAtLeastThreeLanguages);

const emails = users.map(({email}) => email);

console.log(emails);

const totalExp = users.reduce((total, user) => total + user.yearsOfExperience, 0);
console.log(totalExp / users.length);

const average = users.reduce((ave, user) => ave + user.yearsOfExperience / users.length, 0);
console.log(average);

const longestEmail = users.reduce((email, user) => {
    if (email.length > user.email.length) {
        return email;
    } else {
        return user.email;
    }
}, users[0]); // or you can use emails.reduce((longStr, email) => (longStr.length > email.length) ? longStr : email);

console.log(longestEmail);

const introduction = users.reduce((str, user, index) => {
    if (index === users.length - 1) {
        return `${str}and ${user.name}.`;
    } else {
        return `${str}${user.name}, `;
    }
}, "Your instructors are: ");

console.log(introduction);

// BONUS JONAS

const uniqueLangs = users.reduce((langs, user) => {
    for (let lang of user.languages) {
        if (!langs.includes(lang)) { // langs.includes(lang) === false
            langs.push(lang);
        }
    }
    return langs;
}, []);

console.log(uniqueLangs);

const davidsCoolWayToGetUniqueLanguages = Array.from(new Set(users.reduce((langs, user) => {
            for (let lang of user.languages) {
                langs.push(lang);
            }
            return langs;
        }, [])
    )
);

console.log(davidsCoolWayToGetUniqueLanguages);







