const signUp = document.getElementById("signUp");

function generateError(div, field) {
    field.style.border = "2px solid var(--red)";
    errorDiv = document.createElement("div");
    errorDiv.style.transform = "translate(125px, -12px)";
    errorParagraph = document.createElement("p");
    errorParagraph.setAttribute("class", "error");
    errorParagraph.style.fontFamily = "Poppins500";
    errorParagraph.style.color = "var(--red)";
    div.appendChild(errorDiv);
    if (field.id == 'userEmail') {
        field.setAttribute("class", "errorPlace");
        field.value = "";
        field.placeholder = "email@example/com";
        errorMessage = document.createTextNode(`Looks like this is not an ${field.name}`);
    } else
        errorMessage = document.createTextNode(`${field.name} cannot be empty`);
    errorParagraph.appendChild(errorMessage);
    errorDiv.appendChild(errorParagraph);
    errorIcon = document.createElement("img");
    errorIcon.setAttribute("src", "images/icon-error.svg");
    errorIcon.setAttribute("Alt", "Error Icon");
    errorIcon.style.transform = "translate(40px, -58px)";
    errorDiv.appendChild(errorIcon);
    setTimeout(() => {
        if (field.id == "email") {
            field.setAttribute("class", "");
            field.placeholder = "Email Address";
        }
        field.style.border = "";
        field.removeChild(errorDiv);
    }, 5000);
}

function verifyInput(div, field) {
    if (field.value == "") {
        generateError(div, field);
        event.preventDefault();
    } else
        field.style.borderColor = "";
}

function validateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        return true;
    } else
        return false;
}

function verifyEmail(div, email) {
    if (validateEmail(email) == false) {
        generateError(div, email);
        event.preventDefault();
    } else
        email.style.borderColor = "";
}