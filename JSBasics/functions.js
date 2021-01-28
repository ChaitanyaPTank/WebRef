// Functions

/***
// Function declaration
function walk(){
	console.log('walk');
}


// function expression

// anonymous function
let run = function(){
	console.log('run');
};

	// OR

// named function expression
let run = function running(){
	console.log('named function expression');
};

let move = run; // makes move variable to point where run is pointing

move() = run();
***/

/***
// Hoisting
// you can call function before it is declared, but you can not call function expression before it is
// defined
//
// JS engine moves all function declaration at the top of file (not function expression)
// this process is called hoisting

walk(); // this is valid
function walk(){
	console.log('walk');
}

run(); // this is not valid
let run = function running(){
	console.log('named function expression');
}
***/


/***
// Arguments

sum (a, b){
	console.log(arguments);
	return a+b
}

console.log(sum(5,7);
sum(1, 2, 3, 4); // valid and wont give error
sum(1); // valid and will not give error
// JS has an argument object which we are logging in above function

function independentSum() {
	let total = 0;
	for (let value of arguments)
		total += value;
	return total;
}

console.log(sum(1,2,3)); // you can pass any amount of arguments to this function as it takes args from arguments object
***/


/***
// Rest operator

// do not consfuse with spread operator by syntax
// rest operator takes all arguments and put them in a single array
// so you can send any number of arguments.
// rest should be last parameter in declaration => sum(...args, anotherArg) is not valid
// sum(arg, ...anotherArgs) is valid

function sum(...args){ // this is diffrent than function sum(args)
	return args.reduce((a, b) => a + b); // refer to reduce method in array section
}

console.log(sum(1, 2, 3, 4, 5, 6));

// shopping cart example
function sum(discount, ...prices){
	let total = prices.reduce((a, b) => a + b);
	return total * (1 - discount);
}
***/


/***
// default aprameters
function interest (principal, rate=3.5, years=5){ // we must use default parameters in last
	return principal * rate / 100 * years;
}
***/


/***
// getters & setters
// const person = {
	// firstName = 'Chaitanya',
	// lastName = 'Tank'
// };

// console.log(`${person.firstName} ${person.lastName}`); // not better implementation

// sol 1
// const person = {
	// firstName: 'Chaitanya',
	// lastName: 'Tank',
	// fullName (){
		// return `${person.firstName} ${person.lastName}`;
	// }
// }

// console.log(person.fullName());

// using getter and setter

// getter -> gets / access value
// setter sets the value or properties

const person = {
	firstName: 'Chaitanya',
	lastName: 'Tank',
	get fullName(){
		return `${person.firstName} ${person.lastName}`;
 
	},
	set fullName(value) {
		value.split(' ');
		this.firstName = parts[0];
		this.lastNamr = parts[1];
	}
}

console.log(person.fullName);
***/


/***
// Error handling
// error and exception are different

// try and catch

const person = {
	firstName: 'Chaitanya',
	lastName: 'Tank',
	get fullName(){
		return `${person.firstName} ${person.lastName}`;
	},
	set fullName(value) {
		if (typeof(value) !== 'string')
			throw new Error('Input is not string');

		const parts = value.split(' ');
		if (parts.length !== 2)
			throw new Error('Please enter first and last name');
		this.firstName = parts[0];
		this.lastNamr = parts[1];
	}
}

try {
	console.log(typeof(person.fullName));
}

catch (e){
	alert (e);
}

***/


// Local vs Global scope

// let vs var
// var => function scoped variables
// let, const => block scoped variables
//
// when you use var it attches your variables in window object which is central,
// so as usual we should avoid declaring global variables as much as we can.


/***
// this key word
//
const video = {
	title: 'a',
	tags: ['a', 'b', 'c'],
	showTags(){
		// here second param "this" in forEach method is "this variable refering 
		// to the object tiself, without the second argument this.title would be
		// window.title
		this.tags.forEach(function(tag){
			console.log(this.title, tag), this);
		}
}
***/


// changing this variable

/***
const video = {
	title: 'a',
	tags: ['a', 'b', 'c'],
	showTags(){
		const self = this; // this is not preferred way to fix
		this.tags.forEach(function(tag){
			console.log(self.title, tag)
			});
	}
}
***/


/***
function playVideo(a,b) {
	console.log(this);
}

// call method
playVideo.call({name: 'Name'}, 1, 2);

// apply method
playVideo.apply({name: 'Name'}, [1,2])

// bind method
// bind makes new function and makes this to poins to it for forever
playVideo.bind({name: 'Name'})(); 


// sol 2 for showTags function

const video = {
	title: 'a',
	tags: ['a', 'b', 'c'],
	showTags(){
		this.tags.forEach(function(tag){
			console.log(this.title, tag);
		}.bind(this));
	}
}

video.showTags();


// sol 3

const video = {
	title: 'a',
	tags: ['a', 'b', 'c'],
	showTags(){
		this.tags.forEach(tag => console.log(this.title, tag)); // arrow functions do inherit this variable
	}
}
***/
