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
</tr>`;

table.innerHTML += row;

});
