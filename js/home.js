let logOutBtn = document.getElementById("logOutBtn");

let currentUserName = localStorage.getItem("currentUserName");
if (currentUserName) {
  document.getElementById("currentUserName").innerHTML = currentUserName;
} else {
  document.getElementById("home").innerHTML = `    <!-- <div class="scam">
  <h1>You need to login first</h1>
  <a href="../index.html">login</a>
</div> -->`;
}

logOutBtn.addEventListener("click", removeUserName);

function removeUserName() {
  localStorage.removeItem("currentUserName");
  JSON.parse(localStorage.removeItem("userInputs"));
}
function load() {
  if (!JSON.parse(localStorage.getItem("userInputs"))) {
    document.getElementById(
      "home"
    ).innerHTML = `    <div id="scam" class="scam">
    <div>    <h1>You need to login first</h1>
    <a href="../index.html">login</a></div>


  </div>`;
  }
}
