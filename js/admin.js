function addNewArticle() {
    var title = document.getElementById('title');
    var body = document.getElementById('body');
    var length = 0;
    var messages = [];

    if (title.value === "") {
        length = length + 1;
        messages.push("Please enter a title.");
    }

    if (body.value === "") {
        length = length + 1;
        messages.push('Please enter a body.');
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
            'New article published.' + '</div>');
        resetFields();
        window.alert = function () {};
        window.setTimeout(function () {
            $('#success').remove();
        }, 3000);
    }
}

function createAlert(content) {
    $(content).prependTo('#publish');
}

function resetFields() {
    var inputs = document.getElementsByClassName('form-control');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}

function submitFormData() {
    var title = document.getElementById("title").value;
    var body = document.getElementById("body").value;
    var dataString = 'title=' + title + '&body=' + body;
    $.ajax({
        type: "POST",
        url: "php/admin.php",
        data: dataString,
        cache: false,
        success: function () {}
    });
}
