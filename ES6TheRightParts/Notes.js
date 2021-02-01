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

// Array destructuring

function foo () {
		return [1, 2, 3];
}

var tmp = foo();
a = tmp[0];
b = tmp[1];
c = tmp[2];
