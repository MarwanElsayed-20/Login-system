// sign up logic
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");
let signUpBtn = document.getElementById("signUpBtn");

let nameInvalidMessage = document.getElementById(
  "validationServerUsernameFeedback"
);
let emailInvalidMessage = document.getElementById("validationServer03Feedback");
let passwordInvalidMessage = document.getElementById(
  "validationServer04Feedback"
);

let emailExistMessage = document.getElementById("validationTextarea");

let registrationMessage = document.getElementById("Register");

let users = JSON.parse(localStorage.getItem("user")) || [];

signUpBtn.addEventListener("click", function (e) {
  e.preventDefault();
  getUserData();
});
console.log(userEmail.value);
// get user data
function getUserData() {
  if (
    nameValidation() &&
    emailValidation() &&
    passwordValidation() &&
    emailExistence() != false
  ) {
    let user = {
      name: userName.value,
      email: userEmail.value,
      password: userPassword.value,
    };

    users.push(user);
    localStorage.setItem("user", JSON.stringify(users));
    clearInputs();
    emailExistMessage.classList.replace("d-block", "d-none");
    registrationMessage.classList.replace("d-none", "d-block");
  } else {
    if (!nameValidation()) {
      nameIsInValid();
    }
    if (!emailValidation()) {
      emailIsInValid();
    }
    if (!passwordValidation()) {
      passwordIsInValid();
    }
    emailExistMessage.classList.replace("d-none", "d-block");
  }
}

function clearInputs() {
  userName.value = "";
  userEmail.value = "";
  userPassword.value = "";
  userName.classList.remove("is-valid");
  userEmail.classList.remove("is-valid");
  userPassword.classList.remove("is-valid");
}

// name validation
function nameValidation() {
  let nameRegEx = /^[a-zA-Z]{2}(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  if (nameRegEx.test(userName.value)) {
    return true;
  } else {
    return false;
  }
}

function nameIsValid() {
  userName.classList.remove("is-invalid");
  userName.classList.add("is-valid");
  nameInvalidMessage.classList.replace("d-block", "d-none");
}

function nameIsInValid() {
  userName.classList.remove("is-valid");
  userName.classList.add("is-invalid");
  nameInvalidMessage.classList.replace("d-none", "d-block");
}

userName.addEventListener("keyup", function () {
  if (nameValidation()) {
    nameIsValid();
  } else {
    nameIsInValid();
  }
});

// email validation
function emailValidation() {
  let emailReqEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (emailReqEx.test(userEmail.value)) {
    return true;
  } else {
    return false;
  }
}

function emailIsValid() {
  userEmail.classList.remove("is-invalid");
  userEmail.classList.add("is-valid");
  emailInvalidMessage.classList.replace("d-block", "d-none");
}

function emailIsInValid() {
  userEmail.classList.remove("is-valid");
  userEmail.classList.add("is-invalid");
  emailInvalidMessage.classList.replace("d-none", "d-block");
}

userEmail.addEventListener("keyup", function () {
  if (emailValidation()) {
    emailIsValid();
  } else {
    emailIsInValid();
  }
});

// password validation
function passwordValidation() {
  let passwordReqEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (passwordReqEx.test(userPassword.value)) {
    return true;
  } else {
    return false;
  }
}

function passwordIsValid() {
  userPassword.classList.remove("is-invalid");
  userPassword.classList.add("is-valid");
  passwordInvalidMessage.classList.replace("d-block", "d-none");
}

function passwordIsInValid() {
  userPassword.classList.remove("is-valid");
  userPassword.classList.add("is-invalid");
  passwordInvalidMessage.classList.replace("d-none", "d-block");
}

userPassword.addEventListener("keyup", function () {
  if (passwordValidation()) {
    passwordIsValid();
  } else {
    passwordIsInValid();
  }
});

// email existence
function emailExistence() {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email.toLowerCase() == userEmail.value.toLowerCase()) {
      return false;
    }
  }
}

/************************************************************/
/************************************************************/
