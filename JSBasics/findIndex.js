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


// do findIndex

const courses = [
	{ id:1, name: 'node.js'},
	{ id:2, name: 'js'},
	{ id:3, name: 'python'},
	{ id:4, name: 'c'}
];

courses.sort((a, b) => (a.name > b.name) ? 1 : -1)

console.log(courses);
