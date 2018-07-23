// ==============================
// -    OBJECT DESTRUCTURING
// ==============================


// const hero = {
//     name: 'Spider-Man',
//     power: 'do whatever a spider can',
//     location: {
//         city: 'New York',
//         area: 'Queens'
//     }
// };

// const {name: heroName = 'Anonymous', power, location} = hero;
// const{city, area} = hero.location;

// console.log(`${heroName} is from ${area}, ${city}`);
// console.log(`${heroName}'s power is ${power}`);


// const book = {
//     title: 'Harry Potter and the Goblet of Fire',
//     author: 'J.k Rowling',
//     publisher: {
//         name: 'Bloomsbury'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);


// ==============================
// -    ARRAY DESTRUCTURING
// ==============================

// const address = ['123 E Sesame Street', 'Queens', 'New York', '12345'];
// const [street, city, state = 'New York', zip] = address;
// console.log(`The delivery goes to ${city}, ${state}`);

const item = ['Iced Coffee', '$3.00', '$4.50', '$5.00'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} is ${mediumPrice}`);