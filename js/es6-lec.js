(() => {
    function something () {
        return "something";
    }

    const coolThing = () => "Wow, arrow functions are cool!";

    console.log(coolThing());

    const squareNumIfNum = (num) => {
        if (!isNaN(parseFloat(num))) {
            return num ** 2;
        }
    }

    console.log(squareNumIfNum(4));
    console.log(squareNumIfNum("3"));
    console.log(squareNumIfNum("boar"));

    const changeH1BG = (color) => $("#jeff").css("background", color);

    console.log(changeH1BG("darkorange").html("You got honked!"));

    const obj = {
        name: "Bill",
        height: "Tall",
        sayHello: function() {
            return `Hello from ${this.name}`;
        }
    }

    const printFirstAndLastName = (first, last) => console.log(`Howdy from ${first} ${last}`);

    const printAboutObj = obj => console.log(`This is ${obj.name} and they are ${obj.height}! They introduce themselves by saying, "${obj.sayHello()}"`);
    printFirstAndLastName("David", "Stephens");
    printAboutObj(obj);

    console.log("////////////");
    const arr = [1,2,3,4];

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        console.log(el);
    }
    let el = "chewing gum";
    console.log(el);

    console.log("////////////");
    for (let el of arr) {
        console.log(el);
    }

    console.log("////////////");

    const sayHello = (name = "World") => `Hello, ${name}`;

    console.log(sayHello("Jason"));
    console.log(sayHello());

    console.log("////////////");
    let name = "David"
    const david = {
        name,
        age: 30,
        sayHello
    }

    console.log(david.name);

    console.log("////////////");
    let sam = {name: "Sam", age: 24, parent: {name: "Lance", age: 50}};
    david.parent = {name: "Joe", age: 64};
    let {age, parent} = david;
    console.log(parent);
    age = 31;
    console.log(age);
    console.log(david.age);

    parent.age = 62;
    console.log(parent.age);
    console.log(david.parent.age);

    const myArray = [{name: "David"}, {name: "Jay"}, {name: "Trevor"}];
    let [x,y] = myArray;
    console.log(x);
    console.log(y);

    const addFourNumsTogether = (a,b,c,d) => a + b + c + d;

    console.log(addFourNumsTogether(...arr));
})();