function resetFields() {
    var inputs = document.getElementsByClassName('form-control');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }

    if (document.getElementById('terms').checked) {
        document.getElementById('terms').checked = false;
    }
}

function checkFormInput() {
    var email = document.getElementById('email');
    var name = document.getElementById('name');

    var mailcriteria = /^([a-zA-Z0-9_.-])+@([a-zA-Z])+\.([a-zA-Z])+$/;
    var namecriteria = /^[a-zA-Z\s]+$/;

    var checked = document.getElementById('terms').checked;

    var messages = [];
    var length = 0;

    if (!namecriteria.test(name.value) || name.value === "") {
        length = length + 1;
        messages.push("Please enter a valid name.");
    }

    if (!mailcriteria.test(email.value) || email.value === "") {
        length = length + 1;
        messages.push('Please enter a valid email address.');
    }

    if (!checked) {
        length = length + 1;
        messages.push("Please agree to our terms.");
    }

    if (length > 0) {
        messages = messages.join("<br>");
        createAlert('<div class="alert alert-warning overlay-alert m-4" id="error-alert" role="alert">' +
            messages + '</div>');
        window.setTimeout(function () {
            $('#error-alert').remove();
        }, 3000);
    } else {
        submitFormData();
        createAlert('<div class="alert alert-success overlay-alert m-4" id="success" role="alert">' +
            'Success! You are now subscribed.' + '</div>');
        resetFields();
        window.alert = function () {};
        window.setTimeout(function () {
            $('#success').remove();
        }, 3000);
    }
}

function submitFormData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var dataString = 'name=' + name + '&email=' + email;
    $.ajax({
        type: "POST",
        url: "php/signup.php",
        data: dataString,
        cache: false,
        success: function () {}
    });

}

function createAlert(content) {
    $(content).prependTo('#signup');
}
