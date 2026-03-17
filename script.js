const students = [
{ id: 1, name: "Arun", email: "arun@email.com" },
{ id: 2, name: "Vijay", email: "vijay@email.com" },
{ id: 3, name: "Rahul", email: "rahul@email.com" }
];

const table = document.getElementById("studentTable");

students.forEach(student => {

let row = `<tr>
<td>${student.id}</td>
<td>${student.name}</td>
<td>${student.email}</td>
<td><button class="btn btn-danger btn-sm" onclick="deleteStudent(${student.id})">Delete</button></td>
</tr>`;

table.innerHTML += row;

});

function addStudent(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

if(name === "" || email === ""){
alert("Please enter name and email");
return;
}

let id = students.length + 1;

let student = { id, name, email };

students.push(student);

let row = `<tr>
<td>${student.id}</td>
<td>${student.name}</td>
<td>${student.email}</td>
<td><button class="btn btn-danger btn-sm" onclick="deleteStudent(${student.id})">Delete</button></td>
</tr>`;

document.getElementById("studentTable").innerHTML += row;

document.getElementById("name").value = "";
document.getElementById("email").value = "";

}
function deleteStudent(id){

let rows = document.getElementById("studentTable").rows;

for(let i = 0; i < rows.length; i++){

if(rows[i].cells[0].innerText == id){
rows[i].remove();
break;
}

}

}
