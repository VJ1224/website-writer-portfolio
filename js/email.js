function resetFields() {
    var inputs = document.getElementsByClassName('form-control');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}

function checkEmailInput() {
    var email = document.getElementById('email');
    var name = document.getElementById('name');
    var subject = document.getElementById('subject');
    var body = document.getElementById('body');

    var mailcriteria = /^([a-zA-Z0-9_.-])+@([a-zA-Z])+\.([a-zA-Z])+$/;
    var namecriteria = /^[a-zA-Z\s]+$/;

    var messages = [];
    var length = 0;

    if (!namecriteria.test(name.value) || name.value === "") {
        length = length + 1;
        messages.push("Please enter a valid name. ");
    }

    if (!mailcriteria.test(email.value) || email.value === "") {
        length = length + 1;
        messages.push('Please enter a valid email address.');
    }

    if (subject.value === "") {
        length = length + 1;
        messages.push('Please enter a subject.');
    }

    if (body.value === "") {
        length = length + 1;
        messages.push('Please enter an email body.');
    }

    if (length > 0) {
        messages = messages.join("<br>");
        createAlert('<div class="alert alert-warning overlay-alert m-4" id="error-alert" role="alert">' +
            messages + '</div>');
        window.setTimeout(function () {
            $('#error-alert').remove();
        }, 3000);
    } else {
        submitEmailData();
        createAlert('<div class="alert alert-success overlay-alert m-4" id="success" role="alert">' +
            'Email sent successfully.' + '</div>');
        resetFields();
        window.alert = function () {};
        window.setTimeout(function () {
            $('#success').remove();
        }, 3000);
    }
}

function submitEmailData() {
    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var subject = document.getElementById('subject').value;
    var body = document.getElementById('body').value;
    var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&body=' + body;
    $.ajax({
        type: "POST",
        url: "php/email.php",
        data: dataString,
        success: function () {}
    });
}

function createAlert(content) {
    $(content).prependTo('#contact');
}
