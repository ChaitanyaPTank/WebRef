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

const users = [];

// args = id=(users.length+1), firstName, lastName, age, collage, university
function makeNewUser(){

	const formObj = document.getElementById("userForm");

	for (let val of formObj){
		if (val.value === '' || val.value === null || val.value === undefined){
			console.log("Can not be empty!");
			return;
		}
	}

	const id = users.length+1;
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
	
	users.push(newUser);

	formObj.reset();

	// for (let prop in newUser){
	// 	const newCell = newRow.insertCell();
	// 	newCell.innerHTML = newUser[prop];
	// }

	renderTable();
	
}

function deleteUser(id){
	const index = users.findIndex(user=> user.id === id);
	users.splice(index, 1);
	renderTable();
}

function editUser(id) {
	console.log("Edit is called");
}

function renderTable(){

	const table = document.getElementById("table");

	// get table head and table bod̥
	const oldBody = document.getElementById("tableBody");
	const newTableBody = document.createElement("tbody");
	newTableBody.setAttribute("id", "tableBody");

	for (let user of users){

		const newRow = newTableBody.insertRow();

		for (let prop in user){
			const newCell = newRow.insertCell();
			newCell.innerHTML = user[prop];
		}

		// This is adding delete cell		
		const delCell = newRow.insertCell();
		const deletionButton = document.createElement("button");
		deletionButton.name = "del" + user.id;
		deletionButton.innerHTML = "Delete";
		deletionButton.setAttribute("onclick", `deleteUser(${user.id})`);
		delCell.appendChild(deletionButton);

		// This is adding edit cell
		const editCell = newRow.insertCell();
		const editButton = document.createElement("button");
		editButton.name = "edit" + user.id;
		editButton.innerHTML = "Edit";
		editButton.setAttribute("onclick", `editUser(${user.id})`);
		editCell.appendChild(editButton);

	}

	table.removeChild(oldBody);
	table.appendChild(newTableBody);
}

