// Array
// Adding new elements
// finding elements
// removing elements
// splitting array
// combining array


// Adding elements

// const numbers = [3, 4];

// Adding to end
//numbers.push(5 ,6);
//console.log(numbers);

// Adding to beginning
// numbers.unshift(1,3);
// console.log(numbers);

// Adding number to middle
// numbers.splice(2, 0, 'a', 'b'); // 2 here is index where we wants to insert our elements and 0 is numbers you want to delete from target array


// Find elements in array

// Finding in premitives

// const numbers = [1, 2, 1, 3, 4];

// indexOf method
// console.log(numbers.indexOf('a')); // not available in array so will return -1
// console.log(numbers.indexOf(1));

// numbers.lastIndexOf(1);

// check if given element does exists in array

// numbers.indexOf(value) !== -1 // OR
// numbers.includes(value)
// indexOf(value, startingIndex)


// Finding reference type elements from array

//const courses = [
//	{id:1, name: 'a'},
//	{id:1, name: 'b'}
//];


//const isFound = courses.find(function(element){
//	return  element.name === 'a';
//});

// OR

//const isFound2 = courses.findIndex(function(courseObject){
//	return courseObject.name = 'a';
//})

// here in above example find method on courses is calling callback / predicate function and that 
// function returns if it founds the element


// Arrow function

// const course = courses.find(course => course.name === 'a');


// Removing elements
// const numbers = [1, 2, 3, 4];

// Removing from end
// const last = numbers.pop();
// console.log(last);

// removing from beginning
// const first = numbers.shift();
// console.log(first);

// removing from middle
// numbers.splice(2, 1); // starting from index 2 remove only one element
// console.log(numbers);


// Making array empty

// let number = [1, 2, 3, 4, 5];

// BY dereferencing
// By array.length = 0
// By array.splice(0, array.length)
// By while(array.length > 0)
// 	array.pop();


// Combine or slice an array in two parts

// combined = firstArray.concat(secondArray);
// combine.slice(2,4) // 2 = starting index and 4 = finish index

// concatanation is done by pointing proper references, so if you make any change
// in first or second, that will be reflect in combined and slice also
// See below

//const first = [1, 2, 3];
//const second = [4, 5, 6];
//
//const combined = first.concat(second);
//first[0].id = 10;
//const slice = combined.slice();
//
//console.log(combined);
//console.log(slice);


// The spread operator (in ES6)

//const first = [1, 2, 3];
//const second = [4, 5, 6];
//
//const combined = [...first, ...second]; // ... -> spreading array 
//const copy = [...combined];


/***
// Iterating throught array
const arrayName = [1, 2, 3, 4, 5];

for (let number of arrayName)
	console.log(number);

	// OR

arrayName.forEach(number => console.log(number));
***/



/***
// join method

const joined = arrayName.join(',');
console.log(joined);

// split method for string
const splitted = joined.split(',')
console.log(splitted);

console.log(splitted.join('-'));
***/


/***
// Sorting array
const unsorted = [3, 4, 2, 5, 1];
unsorted.sort();
console.log(unsorted)

// reverse method

unsorted.reverse();
console.log(unsorted);
***/


/***
// Sorting objects in array

const courses = [
	{id: 1, name: 'Node.js'},
	{id: 2, name: 'Javascript'};
]

courses.sort((a,b) => {
	// if a < b : return -1;
	// if a > b : return 1;
	// if a === b : return 0;
	
	const nameA = a.name.toLowerCase(); // These two lines are removing 
	const nameB = b.name.toLowerCase(); // effect of case sensitivity

	if (nameA < nameB) return -1;
	if (nameA > nameB) return 1;
	return 0;
});

console.log(courses);
***/

// Testing array elements

// every() and some() methods
// every returns true if all elements satisfy the condition in callback fn
// some returns true if any single element satisfy the condition in callback fn

/***
const randomArray = [1, -2, 5, 6, 23, -4];

const areAllPositive = randomArray.every(value => value >= 0);
console.log(areAllPositive);


const anyNegative = randomArray.some(value => return value <= 0);
console.log(anyNegative);
***/


/***
// Filtering an array
const randomArray = [1, -2, 4, 7];

const filtered = randomArray.filter(value => value >= 0);
console.log(filtered);
***/


// mapping array
// Mapping is used to map array with markup


/***
const randomArray = [1, -4, 4, -6, 7, 3];
const items = randomArray.map(n => `<li> ${n} </li>`);
const html = `<ul> ${items.join('')} </ul>`;

console.log(html);

const mappedWithObj = randomArray.map(element => ({value: element}) );

console.log(mappedWithObj);

// We can chain filter and map methods as they both return array object

***/


/***
// Reduce method

const randomArray = [1, -4, 5, 7, 9];

const sum = randomArray.reduce(
	(accumulator, current) => (accumulator + current),
	0);

console.log(sum);
***/


// Exercise

/***
// Create function which returns array made from number of min and max limit
function arrayFromRange (min, max) {
	const result = [];
	for (let i = min; i <= max; ++i)
		result.push(i);
	return result;
}

console.log(arrayFromRange(-5, 50));
***/


/***
// Write function like include method
const test = [1, 5, 3, 9, 8, 5];

function includes(array, element) {
	for (let value of array)
		if (value === element)
			return true;
	return false;
}

console.log(includes(test, 9));
***/


/***
// make function which will remove array elements from target array

const test = [1, 2, 4, 5, 3, 0, 9];
function except(array, exclude) {
	const result = [];
	for (let element of array)
		if (!exclude.includes(element))
			result.push(element);
	return result;
}

console.log(except(test, [9, 0, 2]));
}
***/


/***
// Write function which replaces elements based on index and offset provided
// by user
const test = [1, 2, 4, 6];

function moveElement(array, index, offset) {
	const newPosition = index + offset;
	if (newPosition < 0 || newPosition >= array.length){
		console.error('Out of index');
		return;
	}

	const output = [...array];
	const target = output.splice(index, 1);
	output.splice(newPosition, 0, target[0]);
	return output;
}

const result = moveElement(test, 1, 2);
console.log(result);
***/
