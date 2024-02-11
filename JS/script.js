var btn_computers = document.querySelector(".computer3");
var btn_mobiles = document.querySelector(".mobile3");
var btn_watches = document.querySelector(".watch3");
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
  localStorage.removeItem("sign");
  setTimeout(() => {
    window.location = "index.html";
  }, 1000);
});

/////////////////////////////////////////// Products ////////////////////////////////////////////
let dcomputers = document.getElementById("computers2");
var products = [
  {
    id: 1,
    title: "Dell Alienware",
    description:
      "R5 Gaming Laptop | Core Ryzen 9 - 1TB SSD- 64GB RAM - 3080 Ti | 8 Cores @ 4.9 GHz - 12GB GDDR6X",
    price: 2995,
    img: "images/81whwdW8ERL._AC_UY327_FMwebp_QL65_.webp",
  },
  {
    id: 2,
    title: "Lenovo Pad ",
    description:
      "Intel Celeron N4020, 4GB RAM, 64GB Storage, Intel UHD Graphics 600, Win 11 in S Mode, Cloud Grey",
    price: 164,
    img: "images/71bphKmt0DL._AC_UY327_FMwebp_QL65_.webp",
  },
  {
    id: 3,
    title: "ASUS ROG ",
    description:
      "144Hz, GeForce RTX 3050, AMD Ryzen™ 7 6800H/HS, 16GB DDR5, 512GB PCIe SSD,Windows 11.",
    price: 899,
    img: "images/71OyrTkxpGL._AC_UY327_FMwebp_QL65_.webp",
  },
  {
    id: 4,
    title: "Dell Alienware ",
    description:
      "R5 Gaming Laptop | Core Ryzen 9 - 1TB SSD- 64GB RAM - 3080 Ti | 8 Cores @ 4.9 GHz - 12GB GDDR6X | 11 Home in S Mode ",
    price: 2994,
    img: "images/71Ekj79pZtL._AC_UY327_FMwebp_QL65_.webp",
  },
  {
    id: 5,
    title: "Lenovo Pad",
    description:
      "Intel Celeron N4020, 4GB RAM, 64GB Storage, Intel UHD Graphics 600, Win 11 in S Mode, Cloud Grey",
    price: 164,
    img: "images/51RoBmK-NwL._AC_UY327_FMwebp_QL65_.webp",
  },
  {
    id: 6,
    title: "ASUS ROG",
    description:
      "144Hz, GeForce RTX 3050, AMD Ryzen™ 7 6800H/HS, 16GB DDR5, 512GB PCIe SSD,Windows 11.",
    price: 899,
    img: "images/61HxxpI0yQL._AC_UY327_FMwebp_QL65_.webp",
  },
  {
    id: 7,
    title: "IPhone 15 Pro",
    description:
      "Apple iPhone 15 Pro Max (256 GB) - Deep Purple, Bluetooth, Wi-Fi + 12 months extended warranty.",
    price: 2994,
    img: "images/iphone.webp",
  },
  {
    id: 8,
    title: "Samsung S23",
    description:
      "Samsung Galaxy S23 Ultra, 12GB, Phantom Black, Mobile Phone, Dual SIM, 1 Year Manufacturer Warranty.",
    price: 3994,
    img: "images/samsung.webp",
  },
  {
    id: 9,
    title: "OPPO Reno10 5G ",
    description:
      "256GB 8GB Silvery Grey + Free Enco earbuds + 2in1 Gift BOX + 12 months extended warranty",
    price: 5994,
    img: "images/oppo.jpg",
  },
];
// Draw Computers in Html ///////////////////////////////
function write_computers(computers) {
  for (element in computers) {
    dcomputers.innerHTML += `<div class="card col-lg-3 col-md-4 col-sm-6 mx-lg-5 mt-4" id='${computers[element].id}' >
    <img class="card-img-top" src="${computers[element].img}" alt="Card image">
    <div class="card-body">
        <h4 class="card-title">${computers[element].title} <i class="fas fa-heart mx-4  "></i> </h4>
        <p class="card-text">${computers[element].description}</p>
        <p class="card-text"><span class="bg-warning text-dark">${computers[element].price}</span> List:<del>$999.99</del>
        </p>
        <button href="#" class="btn btn-warning btn-outline-dark" onClick='Add_to_cart(${computers[element].id},this)'>Add To Cart</button>
    </div>
    </div>`;
  }
}
write_computers(products.slice(0, 6));

// Draw Mobiles in Html ///////////////////////////////
var dmobiles = document.getElementById("Mobiles");
function write_Mobiles(mobiles) {
  for (element in mobiles) {
    dmobiles.innerHTML += `<div class="card col-lg-3 col-md-4 col-sm-6 mx-lg-5 mt-4 mx-md-1 " id='${mobiles[element].id}'>
      <img class="card-img-top" src="${mobiles[element].img}" alt="Card image" style="height: 366.38px;">
      <div class="card-body">
          <h4 class="card-title">${mobiles[element].title}<i class="fas fa-heart mx-4  "></i> </h4>
          <p class="card-text">${mobiles[element].description}</p>
          <p class="card-text"><span class="bg-warning text-dark">EGP${mobiles[element].price}</span>
              List:<del>EGP18,310</del>
          </p>
          <button href="#" class="btn btn-warning btn-outline-dark" onClick='Add_to_cart(${mobiles[element].id},this)'>Add To Cart</button>
      </div>
  </div>`;
  }
}
write_Mobiles(products.slice(6));
//////////////////////////////cart///////////////////////////////////
var cart2 = document.getElementById("cart");
var cartItems = document.querySelector(".cart-items");
var n_item_cart = document.querySelector("#number-items");
cart2.onclick = function () {
  if (cartItems.style.display == "block") {
    cartItems.style.display = "none";
  } else {
    cartItems.style.display = "block";
  }
};
//////////////////////// Add to Cart //////////////////////////////////////////

var cart_products = [];
var count = 0;
function Add_to_cart(id, th) {
  //  First Check if user Already Login
  if (localStorage.getItem("sign")) {
    // window.location = "products.html";
  } else {
    window.location = "login.html";
  }
  let item = products.find((e) => e.id === id);
  if (th.innerHTML === "Add To Cart") {
    cart_products.push({ ...item, count: 1 });
    localStorage.setItem('cart_items',JSON.stringify(cart_products))
    n_item_cart.innerHTML = cart_products.length;
    draw_cart_items(cart_products.slice(0, 3));
    th.innerHTML = "Remove From Cart";
    th.classList.remove("btn-warning");
    th.classList.add("btn-danger");
  } else {
    th.innerHTML = "Add To Cart";
    th.classList.remove("btn-danger");
    th.classList.add("btn-warning");
    let x = cart_products.indexOf(item);
    cart_products.splice(x, 1);
    localStorage.setItem('cart_items',JSON.stringify(cart_products))
    n_item_cart.innerHTML = cart_products.length;
    if (x <= 2) {
      count--;
      draw_cart_items(cart_products.slice(0, 3));
    }
  }
}
function draw_cart_items(items) {
  cartItems.firstElementChild.innerHTML = "";
  for (e in items) {
    cartItems.firstElementChild.innerHTML += `<div class="item" id='${items[e].id}'>
    <img src="${items[e].img}" alt="">
    <p>${items[e].title}</p>
    <div class="item-info">
        <span class="quantity">1</span>
        <i class="fas fa-plus text-success" onClick=plus(${items[e].id},this)></i>
        <i class="fas fa-minus text-danger" onClick=minus(${items[e].id},this)></i>
    </div>
  </div>
  <hr>`;
  }
}
function plus(id, i) {
  // Plus Count of the item by one
  cart_products.find((e) => e.id === id).count++;
  localStorage.setItem('cart_items',JSON.stringify(cart_products))
  // update the value of the quantity of the item
  i.parentElement.firstElementChild.innerHTML = cart_products.find(
    (e) => e.id === id
  ).count;
}
function minus(id, i) {
  // minus Count of the item by one
  cart_products.find((e) => e.id === id).count--;
  localStorage.setItem('cart_items',JSON.stringify(cart_products))
  let m = cart_products.find((e) => e.id === id);
  // update the value of the quantity of the item
  if (m.count == 0) {
    let x = cart_products.indexOf(m);
    cart_products.splice(x, 1);
    n_item_cart.innerHTML = cart_products.length;
    if (x <= 2) {
      count--;
      draw_cart_items(cart_products.slice(0, 3));
    }
    let all = [...dcomputers.children, ...dmobiles.children];
    let p = all.find((e) => e.id == id);
    p.children[1].children[3].innerHTML = "Add To Cart";
    p.children[1].children[3].classList.remove("btn-danger");
    p.children[1].children[3].classList.add("btn-warning");
  } else {
    i.parentElement.firstElementChild.innerHTML = cart_products.find(
      (e) => e.id === id
    ).count;
  }
}
/////////////////////////////////// Favorite /////////////////////////////////////////
var heart_icon = document.querySelectorAll(".fa-heart");
heart_icon.forEach(function (e) {
  e.onclick = function () {
    if (e.style.color == "orange") {
      e.style.color = "rgb(194, 184, 184)";
    } else {
      e.style.color = "orange";
    }
  };
});
