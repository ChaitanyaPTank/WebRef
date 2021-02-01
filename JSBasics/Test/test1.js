// TODO
// Create Array of object for users, each objects contain this things
//{
//id: 1,
//firstName: 'Himanshu',
//lastName: 'Patel',
//age: 24,
//collage: 'School of Engineering',
//University: 'RK University',
//}
//
//
//Create html page for showing all the users in the table format,
//Add button for updating user details,
//Add button for Creating new user,
//Add button for delete user,
//
//All the user should be updated in table whenever users is created or updated it's detail

// Users database
const users = [
	{
		id: 1,
		firstName: 'Chaitanya',
		lastName: 'Tank',
		age: '23',
		collage: 'SHGEC',
		university: 'RPISE'
	},

	{
		id: 2,
		firstName: 'Himanshu',
		lastName: 'Dudhat',
		age: '25',
		collage: 'ENG',
		university: 'UNI'
	}
];

const makeNewUser = () => {

	const formObj = document.getElementById("userForm");

	console.log(formObj);

	// Validating user data
	for (let val of formObj) {
		if (val.value === '' || val.value === null || val.value === undefined) {
			console.log("Can not be empty!");
			return;
		}
	}

	console.log(formObj[0]);
	console.log(formObj[1]);

	newUser = getUserInfo();

	users.push(newUser);

	formObj.reset();

	renderTable();

}

// Takes info of new user
const getUserInfo = () => {

	const id = users.length + 1;
	const firstName = document.getElementById("fName").value;
	const lastName = document.getElementById("lName").value;
	const age = document.getElementById("uage").value;
	const collage = document.getElementById("ucollage").value;
	const university = document.getElementById("uuniversity").value;

	const newUser = {
		id,
		firstName,
		lastName,
		age,
		collage,
		university
	};

	return newUser;

}

const deleteUser = (id) => {
	const index = users.findIndex(user => user.id === id);
	users.splice(index, 1);
	renderTable();
}

const getElements = () => {

	const firstName = document.getElementById("fName");
	const lastName = document.getElementById("lName");
	const age = document.getElementById("uage");
	const collage = document.getElementById("ucollage");
	const university = document.getElementById("uuniversity");

	return {
		firstName,
		lastName,
		age,
		collage,
		university
	}
}

// Edits user info and called by edit button in HTML
const editUser = (id) => {
	console.log("Edit is called");
	console.log("For user :", id);

	const oldDetails = getElements();

	const uIndex = users.findIndex(user => user.id === id);
	const user = users[uIndex];
	
	buttonToggle("Add", uIndex);
	// const addUserButton = document.getElementById("addUser");
	// addUserButton.setAttribute("onclick", `updateUser(${uIndex})`);
	// addUserButton.innerHTML = "Update";

	oldDetails.firstName.value = user.firstName;
	oldDetails.lastName.value = user.lastName;
	oldDetails.age.value = user.age;
	oldDetails.collage.value = user.collage;
	oldDetails.university.value = user.university;
}

const updateUser = (index) => {

	console.log("Updating user:", index);
	const tempUser = getUserInfo();
	tempUser.id = users[index].id;
	users[index] = tempUser;

	renderTable();

	console.log("Executing buttonToggle");
	buttonToggle("edit");

	// const updateButton = document.getElementById("addUser");
	// updateButton.innerHTML = "Add User";
	// updateButton.setAttribute("onclick", `makeNewUser()`);

	// const form = document.getElementById("userForm()");
	// form.reset();
}

// toggles between button update and addUser
const buttonToggle = (button, userIndex) => {

	console.log("In side button toggle");
	console.log(button);
	if (button === "edit") {
		console.log("Inside if ");
		const updateButton = document.getElementById("addUser");
		updateButton.innerHTML = "Add User";
		updateButton.setAttribute("onclick", `makeNewUser()`)
		return;
	}

	const updateButton = document.getElementById("addUser");
	updateButton.innerHTML = "Update";
	updateButton.setAttribute("onclick", `updateUser(${userIndex})`);

}

// This function renders table based on users array
const renderTable = () => {

	const table = document.getElementById("table");

	// get table head and table body
	const oldBody = document.getElementById("tableBody");
	const newTableBody = document.createElement("tbody");
	newTableBody.setAttribute("id", "tableBody");

	for (let user of users) {

		const newRow = newTableBody.insertRow();

		for (let property in user) {
			const newCell = newRow.insertCell();
			newCell.innerHTML = user[property];
		}

		delCell(user.id,newRow); // Sending userID while making delete cell to set the id as an argument.
		edCell(user.id,newRow); // Same as above

	}

	table.removeChild(oldBody);
	table.appendChild(newTableBody);
	document.getElementById("userForm").reset();

}

// This function will add delete button to cell with userID as an argument
const delCell = (userID, newRow) => {
	// This is adding delete cell		
	const delCell = newRow.insertCell();
	const deletionButton = document.createElement("button");
	deletionButton.name = "del" + userID;
	deletionButton.innerHTML = "Delete";
	deletionButton.setAttribute("onclick", `deleteUser(${userID})`);
	delCell.appendChild(deletionButton);
}

// this function will add edit button to cell with argument as userID
const edCell = (userID, newRow) => {
	// This is adding edit cell
	const editCell = newRow.insertCell();
	const editButton = document.createElement("button");
	editButton.name = "edit" + userID;
	editButton.innerHTML = "Edit";
	editButton.setAttribute("onclick", `editUser(${userID})`);
	editCell.appendChild(editButton);
	// document.getElementById("userForm").reset();
}

renderTable();
