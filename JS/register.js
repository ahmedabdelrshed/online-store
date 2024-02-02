var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var submit = document.getElementById("submit");
var massage = document.getElementById("massage");


submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value === "" || email.value === "" || password.value === "") {
    massage.style.display = 'block'
  }else{
    localStorage.setItem('username',username.value)
    localStorage.setItem('email',email.value)
    localStorage.setItem('password',password.value)
    setTimeout(() => {
        window.location = 'login.html'
    }, 1500);
  }
});
