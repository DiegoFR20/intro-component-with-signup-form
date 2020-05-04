var fNameErrorCont = 0;
var lNameErrorCont = 0;
var emailErrorCont = 0;
var passwordErrorCont = 0;
var container = document.getElementById("container");
var containerWidth = parseInt(container.offsetWidth);
var signUp = document.getElementById("signUp");
var tryIt = document.getElementById("tryIt");

function generateError(div, field) {
    var errorClass = "";
    var errorName = field.id;
    errorClass = errorName.concat("class");
    var error = document.getElementsByClassName(errorClass);
    var errorContName = errorName.concat("ErrorCont");
    var errorCont = eval(errorContName);
    if (eval(errorCont) == 0) {
        field.style.border = "2px solid var(--red)";
        errorDiv = document.createElement("div");
        errorParagraph = document.createElement("p");
        errorParagraph.setAttribute("class", "errorClass");
        errorParagraph.style.fontFamily = "Poppins500";
        errorParagraph.style.marginTop = "-9px";
        errorParagraph.style.color = "var(--red)";
        div.appendChild(errorDiv);
        if (field.id == 'email') {
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
        errorIcon.style.float = "right";
        if (containerWidth == 350) {
            errorIcon.style.transform = "translate(-15px, -53px)";
            errorParagraph.style.float = "right";
            errorParagraph.style.transform = "translate(32px, 10px)";
        } else {
            tryIt.style.transform = "translateY(-40px)";
            signUp.style.height = "480px";
            signUp.style.marginTop = "20px";
            div.style.marginBottom = "-20px";
            signUp.style.transform = "translateY(-40px)";
            errorIcon.style.transform = "translate(380px, -53px)";
            errorParagraph.style.float = "right";
            errorParagraph.style.transform = "translateX(85px)";
        }
        errorIcon.style.position = "relative";
        errorDiv.appendChild(errorIcon);
        if (field.id == "fName") {
            fNameErrorCont++;
        } else if (field.id == "lName") {
            lNameErrorCont++;
        } else if (field.id == "email") {
            emailErrorCont++;
        } else if (field.id == "password")
            passwordErrorCont++;
    }
}

function removeError(div, field) {
    console.log(`errorDiv ${errorDiv}`);
    div.removeChild(errorDiv);
    field.style.borderColor = "";
}

function verifyInput(div, field) {
    if (field.value == "") {
        generateError(div, field);
        event.preventDefault();
    } else {
        field.style.borderColor = "";
    }
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
    } else {
        email.style.borderColor = "";
    }
}