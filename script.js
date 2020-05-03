var contError = 0;

function generateError(target) {
    console.log(target.name);
    target.style.borderColor = "var(--red)";
    errorDiv = document.createElement("div");
    errorParagraph = document.createElement("p");
    errorDiv.setAttribute("id", "error");
    target.appendChild(errorDiv);
    if (target.id == 'email') {
        errorMessage = document.createTextNode(`Looks like this is not an ${target.id}`);
    } else
    errorMessage = document.createTextNode(`${target.name} cannot be empty`);
    errorParagraph.appendChild(errorMessage);
    errorDiv.appendChild(errorParagraph);
    errorIcon = document.createElement("img");
    errorIcon.setAttribute("src", "images/icon-error.svg");
    errorIcon.setAttribute("alt", "Error Icon");
    errorDiv.appendChild(errorIcon);
    setTimeout(() => {
        target.style.borderColor = "";
        target.removeChild(errorDiv);
    }, 5000);
}

function verifyInput(id) {
    if (id.value == "") {
        generateError(id);
        event.preventDefault();
    } else
        id.style.borderColor = "";
}

function validateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        return true;
    } else
        return false;
}

function verifyEmail(email) {
    if (validateEmail(email) == false) {
        generateError(email);
        event.preventDefault();
    } else
        email.style.borderColor = "";
}