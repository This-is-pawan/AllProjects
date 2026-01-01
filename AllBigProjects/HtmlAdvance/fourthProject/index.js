// ---------- COMMON ----------
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ---------- AUTH ----------
document.addEventListener("DOMContentLoaded", () => {
  const userEl = document.querySelector(".user");
  const shopNow = document.querySelector(".shopNow");
  const auth = JSON.parse(localStorage.getItem("user"));
  const register=document.querySelector('.register')
  if (userEl && auth) userEl.innerText = auth.name;

  if (shopNow||register) {
    shopNow.onclick = () => {
      window.location.href = auth ? "home.html" : "login.html";
    };
    register.innerHTML=auth?"logout":"register"
  }

  // Home page
  if (document.getElementById("productList")) {
    displayProducts();
    updateCartCount();
  }

  // Cart page
  if (document.getElementById("cartItems")) {
    renderCart();
  }

  // Receipt page
  loadReceipt();
});

// ---------- PRODUCTS ----------
function generateProductId() {
  return "P" + Math.random().toString(36).substring(2, 8).toUpperCase();
}

function generateProductId() {
  return "P" + Math.random().toString(36).substring(2, 8).toUpperCase();
}

const products = [
  {
    productId: generateProductId(),
    name: "Toy Car",
    price: 299,
    image:"../images/undraw_teddy-bear_6rqf.svg"
  },
  {
    productId: generateProductId(),
    name: "Teddy Bear",
    price: 499,
    image: "../images/undraw_toy-car_ugyu.svg"
  },
  {
    productId: generateProductId(),
    name: "Robot Toy",
    price: 799,
    image:"../images/undraw_teddy-bear_6rqf.svg"
  },
  {
    productId: generateProductId(),
    name: "Puzzle Game",
    price: 199,
    image: "../images/undraw_toy-car_ugyu.svg"
  },
  {
    productId: generateProductId(),
    name: "Remote Car",
    price: 1299,
   image:"../images/undraw_teddy-bear_6rqf.svg"
  },
  {
    productId: generateProductId(),
    name: "Doll House",
    price: 899,
   image: "../images/undraw_toy-car_ugyu.svg"
  },
  {
    productId: generateProductId(),
    name: "Building Blocks",
    price: 399,
     image:"../images/undraw_teddy-bear_6rqf.svg"
  },
  {
    productId: generateProductId(),
    name: "Toy Train",
    price: 699,
    image: "../images/undraw_toy-car_ugyu.svg"
  },
  {
    productId: generateProductId(),
    name: "Soft Panda",
    price: 349,
    image:"../images/undraw_teddy-bear_6rqf.svg"
  },
  {
    productId: generateProductId(),
    name: "Kids Laptop",
    price: 1599,
    image: "../images/undraw_toy-car_ugyu.svg"
  },
  {
    productId: generateProductId(),
    name: "Action Figure",
    price: 549,
    image:"../images/undraw_teddy-bear_6rqf.svg"
  },
  {
    productId: generateProductId(),
    name: "Mini Drone",
    price: 2499,
     image: "../images/undraw_toy-car_ugyu.svg"
  }
];


function displayProducts() {
  const list = document.getElementById("productList");
  if (!list) return;

  list.innerHTML = "";

  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
  <h3>${p.name}</h3>
  <p>&#8377; ${p.price}</p>
  <img src="${p.image}" alt="${p.name}" />
  <button>Add</button>
`;

    div.querySelector("button").onclick = () => addToCart(p);
    list.appendChild(div);
  });
}

// ---------- CART ----------
function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${product.name} added to cart 🛒`);
}

function updateCartCount() {
  const count = document.getElementById("cartCount");
  if (count) count.innerText = cart.length;
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const totalEl = document.getElementById("total");
  if (!cartItems || !totalEl) return;

  cartItems.innerHTML = "";
  let sum = 0;

  cart.forEach((item, index) => {
    sum += item.price;
    cartItems.innerHTML += `
      <div class="cart-item">
        <p>${item.name}</p>
        <p>&#8377; ${item.price}</p>
        <button onclick="removeItem(${index})">X</button>
      </div>
    `;
  });

  totalEl.innerHTML = "Total: &#8377; " + sum;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

// ---------- LOGOUT ----------
const logoutBtn = document.querySelector(".logout");
if (logoutBtn) {
  logoutBtn.onclick = () => {
    localStorage.clear();
    window.location.href = "index.html";
  };
}

// ---------- PAYMENT ----------
function pay() {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
  const orderId = "#TL" + Math.random().toString(36).substring(2, 8).toUpperCase();


  localStorage.setItem("receiptTotal", totalAmount);
  localStorage.setItem("receiptOrderId", orderId);

  localStorage.removeItem("cart");

  alert("Payment Successful 🎉");
  window.location.href = "recipte.html";
}

function goHome() {
  window.location.href = "index.html";
}

// ---------- RECEIPT PAGE ----------
function loadReceipt() {
  const nameEl = document.getElementById("r-name");
  const orderEl = document.getElementById("r-order");
  const totalEl = document.getElementById("r-total");
  const dateEl = document.getElementById("r-date");

  if (!nameEl || !orderEl || !totalEl || !dateEl) return;

  const user = JSON.parse(localStorage.getItem("user"));
  const total = localStorage.getItem("receiptTotal");
  const orderId = localStorage.getItem("receiptOrderId");

  nameEl.innerText = user ? user.name : "Guest";
  orderEl.innerText = orderId;
  totalEl.innerHTML = "&#8377; " + total;
  dateEl.innerText = new Date().toDateString();
}
