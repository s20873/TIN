document.getElementById("submit").addEventListener("click", (event) => {
    var email = document.getElementById("email");
    var snumber = document.getElementById("snumber");

    if (!checkEmail(email.value)) {
        error("emaillable", event)
        return false;
    }
    if (!checkSNumber(snumber.value)) {
        error("snumberlabel", event);
        return false;
    }

    return true;
});

function checkEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(mailformat);
}

function checkSNumber(snumber) {
    var reg = /^\d+$/;
    return snumber.match(reg);
}

function error(element, event) {
    document.getElementById(element).className = "error";
    event.preventDefault();
}