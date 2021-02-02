// # Arrow function

/***
- Normal functions :
function function_name(parameter_list){
	function_body;
	return ;
}

- Arrow functions :

function_name = (parameter_list) => function_body;

- Other possible syntax :

() => 3
x => 3
(...x) => 3
(x,y) => 3 // concise body
x => {try {3;} catch(e){}} // expression as body
x => {return 3;} // you have to write return statement if you put curly braces
x => ({ y:x }) // wrapping object in body in arrow function

- The arrow in arrow function implies return keyword

- You can write consise statements in body of arrow function, you can not write expression without parenthesis.

- Arrow functions are anonymous

- name inferencing of anonymous functions

const name = (x) => 3; // name inferencing means variable name assigned to function (x) {return 3};

// Where you can use arrow function

var obj = {
	id: 42,
	foo: function foo(){
		setTimeout(function(){
				console.log("this.id"); // Here "this" keyword indicates to window object not the "obj" object
		}, 100);
	}
}


// sol1 :

var obj = {
	id: 42,
	foo: function foo(){
		var self = this;
		setTimeout(function(){
				console.log("self.id"); // better you use "context" inplace of "self" for better readability
		}, 100);
	}
} 

// sol2 :

var obj = {
	id: 42,
	foo: function foo(){
		setTimeout(function(){
			console.log("self.id");
		}.bind(this), 100);
	}
}

// sol3 : (use arrow function)

var obj = {
	id: 42,
	foo: function foo(){
		setTimeout( () => console.log("this.id"), 100 );
	}
}
***/

/***
		// let vs var

		// Closures and explicit blocks

		// block scopping in for loops
function foo( x,y ) {
		for (var i = 0; i < 10; ++i){ // should use let i = 0 here
				$("#btn")+i.click(function(){
						cnosole.log("button" + i + "clicked");
				});
		}
}

// Const

const is not about constant value but it is about making immutable reference

// Default values

function foo (x){
		x = x || 42; // we are trying to provide default value of x if it is not passed
		// If we do pass "0" as an argument then it will not take x as 0 as it is falsy value.
		// better solution is

		x = x !== undefined ? x : 42; // This is the better solution
}

// lazy expression

function uniqueID() {
		console.log("!");
}

function foo (id = uniqueID()) {
		// code goes here
}

foo(5); // uniqueID is not called if you are passing any value, untill it does not needs to be evaluated
foo(); // uniqueID() function is called
 ***/

/***
var x = 1;

function foo (x=2, f = function() {return x;}){
		var x = 5;
		console.log(f());
}

foo();
 ***/


/***
		// Gather and spread operator

function foo() {
		var args = [].slice.call( arguments ); // storing args in array
		args.unshift( 42 );
		bar.apply(null, args);
}

// above program using gather and spread operator
// gather and spread operator works on based of context where it is used.

function foo( ...args ){ // gather operator
	args.unshift( 42 );
	bar( ...args ); // spread operator
}

// Bablel
 ***/


/***
		// Array destructuring

function foo () {
		return [1, 2, 3];
}

var tmp = foo();
a = tmp[0];
b = tmp[1];
c = tmp[2];


// better solution in ES6 is
function foo () {
		return [1,2,3]; // or return null; to create error
}

var [a,b,c] = foo() || []; // if foo returns null then || [] will guard against array

var o = {}

[o.a, o.b, o.c, ...o.args] = foo();


// tricks

var a = [1, 2, 3];

[x, y, ...a] = [0, ...a, 4]; // this will throw 0 and 1 and gather [2,3,4] in array
//or
[ , , ...a] = [0, ...a, 4]; // dumping first two value from right side array


function foo(){
		return [1, 2, 3, [4, 5, 6]];
}

var [a, b=42, c, ...args] = foo(); // result = a=1, b=2, c=3, args=[[4,5,6]]

// or for individual mapping

var [a, b, c, [d, e, f]] = foo();

var a, b;

var x = [a, b] = foo(); // x here will not be [1, 2] but it will be [1, 2, 3, [4, 5, 6]]

[ ,,, [c, d]] = [a, b, ...args] = foo();
 ***/


// Object destructuring

function foo () {
		return {a:1, b:2, c:3};
}

var {
		val1,
		val2,
		val3
} = foo() || {}; // assigns 1 to val1, 2 to val2, 3 to val3

var {
		val1,
		val2: valueX,
		val3
} = foo(); // value 2 will be assigned to valueX not to the val2

// Nested object destructuring

function foo() {
		return {a:1, b:2, c:3, d: { e:4 }};
}

var {
		a = 10,
		b: X = 42,
		c,
		d: {
				e
		}
}
