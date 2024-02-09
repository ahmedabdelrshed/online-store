var icons = document.querySelectorAll(".fas");
icons.forEach(function (icon) {
  icon.onclick = function () {
    if (icon.style.color == "orange") {
      icon.style.color = "rgb(194, 184, 184)";
    } else {
      icon.style.color = "orange";
    }
  };
});

var Shopping = document.querySelectorAll(".icon");
var number = document.querySelectorAll(".number");
var number_shopping = 0;
Shopping.forEach(function (shop) {
  shop.onclick = function () {
    number_shopping++;
    number.forEach(function (num) {
      num.innerHTML = number_shopping;
    });
  };
});

var btn_computers = document.querySelector(".computer");
var btn_mobiles = document.querySelector(".mobile");
var btn_watches = document.querySelector(".watch");
var computers = document.querySelector(".computers");
var mobiles = document.querySelector(".mobiles");
var watches = document.querySelector(".watches");

function filters(show, hidden, hidden_2) {
  show.style.display = "grid";
  hidden.style.display = "none";
  hidden_2.style.display = "none";
}

btn_computers.onclick = function () {
  filters(computers, mobiles, watches);
};
btn_mobiles.onclick = function () {
  filters(mobiles, computers, watches);
};
btn_watches.onclick = function () {
  filters(watches, mobiles, computers);
};

///////////////////////////////////// Sign /////////////////////////////////////////////
var sign = document.getElementById("sign");
var out = document.getElementById("log-out");
var user = document.getElementById("user");

if (localStorage.getItem("sign")) {
  sign.firstElementChild.style.display = "none";
  sign.children[1].style.display = "none";
  out.style.display = "inline";
  user.style.display = "block";
  user.children[1].innerHTML = localStorage.getItem("username");
}
out.addEventListener("click", function () {
  localStorage.removeItem('sign')
  setTimeout(() => {
    window.location = 'index.html'
}, 1000);
});

/////////////////////////////////////////// Products ////////////////////////////////////////////

