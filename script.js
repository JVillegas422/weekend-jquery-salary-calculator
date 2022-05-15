console.log('In script.js');

$(document).ready(onReady);

let employeeArray = [];

function onReady() {
    console.log('Ready!');
    $(document).on('click', '#submit-btn', onSubmit);
    $(document).on('click', '#delete-btn', onDelete);
}

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

    $('#first-name').val('');
    $('#last-name').val('');
    $('#id-number').val('');
    $('#job-title').val('');
    $('#annual-salary').val('');


    showTotal();
}

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
  $('#monthly-Total').append(monthlySalary.toFixed(2));
  if (monthlySalary > 20000) {
    $('#monthly-Total').parent().addClass('backGroundRed');
  }
}
