// sign in logic
let signInEmail = document.getElementById("signInEmail");
let signInPassword = document.getElementById("signInPassword");
let signInBtn = document.getElementById("signInBtn");
let loginError = document.getElementById("loginError");

users = JSON.parse(localStorage.getItem("user"));

signInBtn.addEventListener("click", function (e) {
  if (!validAuthentication()) {
    e.preventDefault();
    loginError.classList.replace("d-none", "d-block");
  } else {
    this.setAttribute("href", "pages/home.html");
    console.log(this.setAttribute("href", "pages/home.html"));
  }
});

function validAuthentication() {
  let userInputs = {
    userEmailInput: "",
    userPasswordInput: "",
  };
  for (let i = 0; i < users.length; i++) {
    if (
      signInEmail.value == users[i].email &&
      signInPassword.value == users[i].password
    ) {
      userInputs.userEmailInput = signInEmail.value;
      userInputs.userPasswordInput = signInPassword.value;
      localStorage.setItem("currentUserName", users[i].name);
      localStorage.setItem("userInputs", JSON.stringify(userInputs));
      console.log(userInputs);
      return true;
    }
  }
}

