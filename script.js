console.log('In script.js');

$(document).ready(onReady);
// Created global array
let employeeArray = [];
// targets any events or clicks and will run submit/or delete buttons
function onReady() {
    console.log('Ready!');
    $(document).on('click', '#submit-btn', onSubmit);
    $(document).on('click', '#delete-btn', onDelete);
}
// This will delete/clear the table rows, columns, & data within
function onDelete() {
    console.log('in onDelete()', $(this));
    let tr = $(this).parent().parent();

    let firstName = $(this)
        .parent()
        .siblings()
        .first()
        .text()
    tr.remove();
}
// this function will take all data within the input fields and store them into the global array
function onSubmit() {
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let idNumber = $('#id-number').val();
    let jobTitle = $('#job-title').val();
    let salary = $('#annual-salary').val();
    
    let employObject = {
        firstName: firstName,
        lastName: lastName,
        idNumber: idNumber,
        jobTitle: jobTitle,
        salary: salary
    };

    employeeArray.push(employObject);
// pushes object items to the DOM
    $('#employee-table').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td>${salary}</td>
            <td>
                <button id="delete-btn">
                    Delete
                </button>
            </td>
        </tr>
    `);
// this clears the inputs values once the click submit event has occurred 
    $('#first-name').val('');
    $('#last-name').val('');
    $('#id-number').val('');
    $('#job-title').val('');
    $('#annual-salary').val('');

// runs the function showTotal, see line 67 for function details
    showTotal();
}
// retrieves the total annual salary and calculate the monthly salary per employee
function showTotal() {
    let monthlySalary = 0;
    for (let employee of employeeArray) {
        // Tring to remove $ and commas from string
        let salaryAsNumber = employee.salary.replace('$', '').replace(',', '');
        // Convert string into a number
        salaryAsNumber = Number(salaryAsNumber);
        // grabbing one object at a time
        console.log(salaryAsNumber);
        monthlySalary += salaryAsNumber/ 12;
        console.log(monthlySalary);
  }
  $('#monthly-Total').empty();
// pushes monthly total to the DOM and sets fixed decimal to 2
  $('#monthly-Total').append(monthlySalary.toFixed(2));
  if (monthlySalary > 20000) {
// adds a red background to monthly total if it exceeds $20,000
    $('#monthly-Total').parent().addClass('backGroundRed');
  }
}
