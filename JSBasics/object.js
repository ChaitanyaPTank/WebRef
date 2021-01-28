// // Object oriented programming

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function(){
//         console.log('draw');
//     }
// };

// // circle.draw();


// // Factory function
// function createCircle(radius) {
//     return {
//         radius: radius, // or we can write just radius,
//         draw(){
//             console.log('draw');
//         }
//     };
// }

// // const circle1 = createC(1);
// // console.log(circle1);

// // Camel Notation : oneTwoThreeFourFive
// // Pascal Notaion : OneTwoThreeFourFive


// // Constructor function
// function Circle(radius) { // use pascal naming notation
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// }

// // const circle = new Circle(1);

// // Dynamic nature of object

//  const circle = {
//      radius: 1
//  };

//  circle.color = 'saffron'; // adding property to onject
//  circle.draw = function() {}; //

//  delete circle.draw; // deleting property of object
//  delete circle.color;

//  console.log(circle);


//  // Constructor property
// circle.constructor();

// // Built in constructors

// // Object constructor : new Object();
// // String constructor : new String();
// // Boolean : new Boolean();
// // Number : new Number();
// // Function : Function();


// // The constructor function shown below is executed as

// function Circle(radius) { // use pascal naming notation
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// }

//     // OR

// const Circle1 = new Function ('radius',`
//     function Circle(radius) { // use pascal naming notation
//         this.radius = radius;
//         this.draw = function () {
//             console.log('draw');
//         }
// }
// `)

// Circle.call({}, 1) // this is same as const another = new Circle(1);
//     // OR
// Circle.apply({}, ["param array"]);

// // In JS functions are objects

// // Value and reference types
// // Premitives are value type 
// // Objects are reference type


// // Objects are not iterable in JS
// // Use with for of loop to iterate throught object
// // Object.key() // extracts key from object
// // Object.entry() // extracts key : value pair from object
// // Enumerating properties of object


// // const copy = Object.assign({}, circle);
// // ... = spread operator
// // const copy = { ...circle };  // copied props of circle to empty object


// // Garbage collection

// // Math object
// // String object
//     // String primitive : const variable = 'Hi;
//     // String object : const variable = new String('Hi);
// // Template literal : ``
// // const stringValue = `This is line with same
//                         //format in code`
//                         // const placeHolder = 'PlaceHolder'
//                         // `this is ${placeHolder} in template literal`

// // Date Object


// Exercises
//
//
// Write address object with three properties
// street
// city
// zipcode
// create function to show address

// const address = {
// 	street : 'street',
// 	city: 'city',
// 	zipCode: 'zipCode'
// };

// function showAddress(address){
// 	for (let key in address){
// 		console.log(key, address[key]);
//     }

//     // OR

//     // for (let key of Object.keys(address))
//     //     console.log(key);
//     // for (let entries of Object.entries(address))
//     //     console.log(entries);
// }

// showAddress(address);


// Write constructor and factory function to initialize address object

// // Factory
// function makeAddress(street, city, zip) {
//     return{
//         street,
//         city,
//         zip
//     };
// }

// const address = makeAddress('street5', 'amreli', 365601);

// Constructor

function MakeAddress2(street, city, zip) {
    this.street = street;
    this.city = city;
    this.zipCode = zip
}

const address = new MakeAddress2('street5', 'amreli', 365601);
const address2 = new MakeAddress2('street5', 'amreli', 365601);
let address3 = new MakeAddress2('street', 'city', 'zip');

// Write functions to check equality and if both object are same

// Equality
function checkIfEqual(obj1, obj2) {
    if (obj1['street'] === obj2['street'] && obj1['city'] === obj2['city'] && obj1['zip'] === obj2['zip'])
        return true;
    return false;
}

function checkIfSame(obj1, obj2) {
    if (obj1 === obj2)
        return true;
    return false;
}

// console.log(checkIfEqual(address, address2));
// console.log(checkIfSame(address, address2));

// console.log(checkIfEqual(address, address3));

// // address3 = address;

// console.log(checkIfSame(address, address3));


// make a blogpost object with properties
// title
// body
// author
// views
// comment
//     (author, body)
// isLive

// const myPost = {
//     title: 'Title',
//     body: 'Body',
//     author: 'Author',
//     views: 0,
//     comment: [
//         {
//             author: 'commentAuthor',
//             body: 'commentBody'
//         },
//         {
//             author: 'commentAuthor2',
//             body: 'commentBody2'
//         }
//     ],
//     isLive: false
// }

// Write a constructor function to make a blogpost object

function BlogPost(title, author, body) {
    this.title = title;
    this.author = author;
    this.body = body;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}


// Write array of price range object

priceRange = [
    //{label:labelToShow, popup:popUpToShow, minPrice:minPriceForTheRange, maxPrice:MaxPriceForTheRange}
    {label:'$', popup:'low price', minPrice:10, maxPrice:20},
    {label:'$$', popup:'moderate price', minPrice:21, maxPrice:30},
    {label:'$$$', popup:'expansve', minPrice:31, maxPrice:40},
]