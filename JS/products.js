///////////////////////////////////// Sign /////////////////////////////////////////////
var sign = document.getElementById("sign");
var out = document.getElementById("log-out");
var user = document.getElementById("user");
var dproducts = document.querySelector("#products-items");
if (localStorage.getItem("sign")) {
  sign.firstElementChild.style.display = "none";
  sign.children[1].style.display = "none";
  out.style.display = "inline";
  user.style.display = "block";
  user.children[1].innerHTML = localStorage.getItem("username");
}
out.addEventListener("click", function () {
  localStorage.removeItem("sign");
  setTimeout(() => {
    window.location = "index.html";
  }, 1000);
});
var products = [];
if (localStorage.getItem("cart_items")) {
  products = JSON.parse(localStorage.getItem("cart_items"));
  draw_products(products);
  console.log(products);
} else {
  window.location("index.html");
}

function draw_products(products) {
  for (item in products) {
    dproducts.innerHTML += `<div class="item">
        <img src="${products[item].img}" alt="">
        <div class="item-content">
            <p>Product : ${products[item].title}</p>
            <p>Price: ${products[item].price * products[item].count} $</p>
            <div class="plus">
                <span>${products[item].count}</span>
                <span ><i class="fas fa-plus text-success" onClick=plus(${
                  products[item].id
                },this)></i></span>
                <span ><i class="fas fa-minus text-danger" onClick=minus(${
                  products[item].id
                },this)></i></span>
            </div>
            <button class="btn btn-danger" onClick=remove(${
              products[item].id
            })>Remove</button>
        
        </div>
        </div>`;
  }
}

function plus(id, i) {
  // Plus Count of the item by one
  products.find((e) => e.id === id).count++;
  localStorage.setItem("cart_items", JSON.stringify(products));
  // update the value of the quantity of the item
  i.parentElement.parentElement.firstElementChild.innerHTML = products.find(
    (e) => e.id === id
  ).count;
  i.parentElement.parentElement.parentElement.children[1].innerHTML = `Price : ${
    products.find((e) => e.id === id).price *
    products.find((e) => e.id === id).count
  } $`;
}

function minus(id, i) {
  // minus Count of the item by one
  products.find((e) => e.id === id).count--;
  localStorage.setItem("cart_items", JSON.stringify(products));
  let m = products.find((e) => e.id === id);
  // update the value of the quantity of the item
  if (m.count == 0) {
    remove(id);
  } else {
    i.parentElement.parentElement.firstElementChild.innerHTML = products.find(
      (e) => e.id === id
    ).count;
    i.parentElement.parentElement.parentElement.children[1].innerHTML = `Price : ${
      products.find((e) => e.id === id).price *
      products.find((e) => e.id === id).count
    } $`;
  }
}

function remove(id) {
  let m = products.find((e) => e.id === id);
  let x = products.indexOf(m);
  products.splice(x, 1);
  localStorage.setItem("cart_items", JSON.stringify(products));
  products = JSON.parse(localStorage.getItem("cart_items"));
  dproducts.innerHTML = "";
  draw_products(products);
}
