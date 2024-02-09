var username = document.getElementById("username");
var password = document.getElementById("password");
var submit = document.getElementById("submit");
var massage = document.getElementById("massage");


submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value === "" || password.value === "") {
    massage.style.display = "block";
  } else {
    if (
      username.value === localStorage.getItem("username") &&
      password.value === localStorage.getItem("password")
    ) {
      localStorage.setItem('sign',true);
      setTimeout(() => {
        window.location = "index.html";
      }, 1500);
    } else {
      massage.style.display = "block";
    }
  }
});
