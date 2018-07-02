// =======================
//      LET & CONST
// =======================

var nameVar = 'Bushmaster';
var nameVar = 'Luke Cage';
console.log('nameVar =', nameVar);

let nameLet = 'Misty Knight';
nameLet = 'Claire';
console.log('nameLet =', nameLet);

const nameConst = 'Shades';
console.log('nameConst =', nameConst);


function getPetName() {
    var petName = 'Dexter';
    return petName;
}

const petName = getPetName();
console.log(petName);

// block level scope

const fullName = 'Luke Cage';

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);

console.log('=====================================================');




// =======================
//     ARROW FUNCTIONS
// =======================

function square(x) {
    return x * x;
};

console.log(square(5));


// const squareArrow = (x) => {
//     return x * x
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(7));


const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName(fullName));


const add = (x, y) => {
    return x + y;
};

console.log(add(3, 7));

const user = {
    name: 'Bushmaster',
    locations: ['Kingston', 'Brooklyn', 'Harlem'],
    printPlacesTakenOver() {
        return this.locations.map((location) => this.name + ' has taken over ' + location);
    }
};

console.log(user.printPlacesTakenOver());

console.log('=====================================================');

const multiplier = {
    numbers: [3, 12, 72, 19, 30],
    multiplyBy: 2,
    multipliedNumbers() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multipliedNumbers());