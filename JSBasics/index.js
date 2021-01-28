// console.log('Welcome to Web Refine');

// Variables

// variables are case sensitive in JS

let myName = 'WebRefine';
console.log(myName);

// Constants : declared by work const

const varibale_name = 'constant_value';

// Primitive types of variables

// strings = let name = 'Chaitanya';
// numbers = let age = 4;
// booleans = let isTrue = true;
// undefined = let variable_name; or let variable_name = undefined;
// null = let variable_name = null; "Type of null is object"

// concept of static and dynamic language

// Reference type of variables

// object
// Array
// Functions

let person = {
    name: 'Chaitanya',
    age: 30
};

// accessing the property of an object

person.name = 'ChaitanyaPTank';
    //or
person['name'] = 'ChaitanyaTank';

console.log(person);

// Arrays

// Array is an object in JavaScripts

let selectedColors = ['red', 'yellow'];

selectedColors[2] = 'saffron';
selectedColors[1] = 5;
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors.length);

// Functions

function greet(myName){ // myName is parameter here
    console.log('Hello ' + myName);
}

greet(myName); // myName is argument over here

    // or

function function_two(myName, nickName) {
    console.log('Hello ' + myName + nickName);
}

function_two('Chaitanya', 'Tank');

// return Keyword

function cube(number){
    return number*number*number;
}

let cubeOfNumber = cube(3);

//console.log(cubeOfNumber);
    //or
console.log(cube(3));

// Operators

// arithmatic
// assignment
// comparison
// logical
// bitwise

// Arithmatic

let x = 3;
let y = 5;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x ** y); // exponential

// Increment and Decrement
// ++x, --x, x++, x--;


// Assignment operator (= / += / -= / *= / "/=")

// Comparison (> / >= / < / <= / === / !== / == / !=)
// Strict equality: === (checks values and type equality)
// Lose equality: == (checks values equality)

// Ternary operator

// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise
// they are 'silver' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

// Logical operators

// Bitwise operators
// Operator precedence
// Swapping variables

let x = 10;
let y = 5;

let c = x;
x = y;
y = c;

// Loops
//
// for loop
// while loop
// do while loop
// infinite loops
// for in loop

const person = {
	name: 'Chaitanya',
	age: 25
};

for (let key in person){
	console.log(key, person[key]);
}

const colors = ['saffron', 'white', 'green'];

for (let index in colors){
	console.log(index, colors.index);
}

// for of loop

for (let color of colors){
	console.log(color);
}

// Break and continue
//
// Break makes us jump out of the loop
// continue skips the particular iteration
