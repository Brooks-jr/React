class Hero {
    constructor(alterEgo = 'a secret') {
        this.alterEgo = alterEgo;
    }
    getGreeting() {
        // template string
        return `Hi, my alter ego is ${this.alterEgo}!`;
    }
}

const Batman = new Hero();
console.log(Batman.getGreeting());

const Flash = new Hero('Barry Allen');
console.log(Flash.getGreeting());



class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}



class Student extends Person {
    constructor(name, age, major = 'undecided') {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` Thier major is ${this.major}.`
        }
        return description;
    }
}



class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}


const me = new Traveler('Jeffery Brooks', 26, 'Chicago');
console.log(me.getGreeting());

const other = new Traveler('Jeffery Brooks');
console.log(other.getGreeting());
