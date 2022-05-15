console.log('In script.js');

$(document).ready(onReady);

function onReady() {
    console.log('Ready!');
    $(document).on('click', '#submit-btn', onSubmit);
    $(document).on('click', '#delete-btn', onDelete);
}

function onSubmit() {
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let idNumber = $('#id-number').val();
    let jobTitle = $('#job-title').val();
    let salary = $('#annual-salary').val();

    $('#employee-table').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td>${salary}</td>
            <td>
                <button class="delete-btn">
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
}

function onDelete() {
    let tr = $(this).parent().parent();

    let firstName = $(this)
        .parent()
        .siblings()
        .first()
        .text()
    alert(`You just deleted ${firstName}`);
    tr.remove();
}
