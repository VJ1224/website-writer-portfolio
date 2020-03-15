function openNav() {
    if (screen.width >= 450) {
        document.getElementsByClassName("sidenav")[0].style.width = "450px";
        document.getElementsByTagName("body")[0].style.marginRight = "450px";
    }
    if (screen.width < 450) {
        document.getElementsByClassName("sidenav")[0].style.width = "100%";
    }
}

function closeNav() {
    document.getElementsByClassName("sidenav")[0].style.width = "0";
    document.getElementsByTagName("body")[0].style.marginRight = "0";
}

function insertContent(id) {
    $("#modaldisplay .modal-title").html(document.getElementById(id).innerHTML);
    var baseLink = "/content/";
    var finalLink = baseLink + id + ".txt";
    $("#modaldisplay .modal-body").load(finalLink);
}

function clearContent() {
    $("#modaldisplay .modal-title").html("");
    $("#modaldisplay .modal-body").html("");
}
