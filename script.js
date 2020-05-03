function generateError(target) {
    let targetId = target.id.toString();
    console.log(targetId);
    targetDiv = document.getElementById(targetId);

    target.style.border = "2px solid var(--red)";
    errorDiv = document.createElement("div");
    errorParagraph = document.createElement("p");
    errorParagraph.style.color = "red";
    errorParagraph.setAttribute("class", "error");
    if (target.id == 'email') {
        target.setAttribute("class", "errorPlace");
        target.value = "";
        target.placeholder = "email@example/com";
        errorMessage = document.createTextNode(`Looks like this is not an ${target.id}`);
    } else
        errorMessage = document.createTextNode(`${target.name} cannot be empty`);
    errorParagraph.appendChild(errorMessage);
    errorDiv.appendChild(errorParagraph);
    errorIcon = document.createElement("img");
    errorIcon.setAttribute("alt", "Error Icon");
    errorIcon.setAttribute("src", "images/icon-error.svg");
    errorDiv.appendChild(errorIcon);
    targetDiv.appendChild(errorDiv);
    setTimeout(() => {
        if (target.id == "email") {
            target.setAttribute("class", "");
            target.placeholder = "Email Address";
        }
        target.style.border = "";
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