// write a functoin to return the maximum number from two numbers

function getMaxNumber(num1, num2){
	if (num1 < num2)
		return num2;
	else
		return num1;

	//or
	//return (num1 > num2) ? num1 : num2;
}

// maxNumber = getMaxNumber(3,5)

// console.log(`${maxNumber} is the maximum`);

// Write function which says if image is landscape or portrait

function isLandscape(width, height){
	return (width > height);
}

// console.log(isLandscape(800, 600));

// FizzBuzz algorithm

function fizzBuzz(input){
	if (typeof input !== 'number')
		return NaN;
	else if ((input % 3 === 0) && (input % 5 === 0))
		return 'FizzBuzz';
	else if (input % 5 === 0)
		return 'Buzz';
	else if (input % 3 === 0)
		return 'Fizz';
	else
		return input;
}

fizzBuzz(15);
fizzBuzz(20);
fizzBuzz(9);
fizzBuzz(false);
fizzBuzz('Chaitanya')

// Demerit points
//
// if speed = 70 -> its ok
// each 5 km/hr after 70 will credited with one point
// if points exceeds 12, license should get suspended.
//

function checkSpeed(speed) {
	const speedLimit = 70;
	const kmPerPoint = 5;
	if (speed < speedLimit + kmPerPoint)
		return 'Ok!';
	if (speed > 70) {
		const overSpeed = speed - speedLimit;
		const point = Math.floor(overSpeed / 5);
		if (point >= 12)
			return 'License Suspended';
		return point;
	}
	return 'Below Limit';
}

// console.log(checkSpeed(70));
// console.log(checkSpeed(100));
// console.log(checkSpeed(180));
// console.log(checkSpeed(75));
// console.log(checkSpeed(72));


// Write a function to display if number is ODD or EVEN

function oddEven(limit) {
	for (let i = 0; i < limit; ++i)
	{
		if (i % 2)
			console.log(i, 'ODD');
		else
			console.log(i, 'EVEN');
	}
}

// oddEven(10);


// Write function to count number of truthy values in array
//
function countTruthy(array) {
	let count = 0;
	for (let i of array) {
		if (i) {
			count++;
		}
	}
	return count;
}

// list = [1,2,3, null, undefined, "", 5, 0];

// console.log("number of truthy value is :", countTruthy(list));


// Write a function which will show string properties of passed object

function showProp(passedObject){
	for (let property in passedObject) {
		if (typeof(passedObject[property]) === 'string')
			console.log(property, passedObject[property]);
	}
}

/***
const movie = {
	title: 'a',
	year: 2000,
	rating: 5,
	hero: '0',
	director: 'b'
};

showProp(movie)
***/

// Write a function which will give sum of numbers divisible by 3 or 5 in given range

function giveSum(limit){
	let sum = 0;

	for (let i = 0; i <= limit; ++i){
		if (i % 3 == 0){
			sum += i;
			continue;
		}
		if (i % 5 == 0) {
			sum += i;
		}
	}
	//or
	//if (i % 3 === 0 || i % 5 === 0)
	
	return sum;
}

// console.log(giveSum(10));


// Write a function to calculate grade

// Caculate avg
// 1-59 = F
// 60-69 = D
// 70-79 = C
// 80-89 = B
// 90-100 = A

// const marks = [80, 80, 100, 90, 80];

// We can divide the function written below in two parts one to calculate avg
// and other to calculate grade.
function calculateGrade(marks){
	let total = 0;
	let avg = 0;

	for (let mark of marks){
		total = total + mark;
	}

	avg = total / marks.length;

	if (avg >= 1 && avg <= 59)
	// if (avg <= 59) return 'F';
		console.log('F');
	else if (avg >= 60 && avg <= 69)
		console.log('D');
	else if (avg >= 70 && avg <= 79)
		console.log('C');
	else if (avg >= 80 && avg <= 89)
		console.log('B');
	else if (avg >= 90 && avg <= 100)
		console.log('A');
}

// calculateGrade(marks);
//
// Write a fucntion to show the star pyramid
//
function showPyramid(height){
	for (let row = 0; row < height; ++row){
		let pattern='';
		for (let star = 0; star < row; ++star){
			pattern += '*';
			console.log(pattern);
		}
	}
}

showPyramid(5);
