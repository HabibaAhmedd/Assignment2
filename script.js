//const { events } = require("./person");

var selectedRow = null;

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow == null){
        insertNewRecord(formData);
    } else{
        updateRecord(formData);
    }
    resetForm();
}

function readFormData(){
    var formData = {};
    formData["person"] = document.getElementById("person").value;
    formData["age"] = document.getElementById("age").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.person;
    cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.age;
    cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.gender;
    cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.email;      
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
 
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("person").value = selectedRow.cells[0].innerHTML;
    document.getElementById("age").value = selectedRow.cells[1].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.person;
    selectedRow.cells[1].innerHTML = formData.age;
    selectedRow.cells[2].innerHTML = formData.gender;
    selectedRow.cells[3].innerHTML = formData.email;
}

function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('list').deleteRow(row.rowIndex);
        resetForm();
    }
}

function resetForm() {
    document.getElementById("person").value = '';
    document.getElementById("age").value = '';
    document.getElementById("gender").value = '';
    document.getElementById("email").value = '';
    selectedRow = null;
}