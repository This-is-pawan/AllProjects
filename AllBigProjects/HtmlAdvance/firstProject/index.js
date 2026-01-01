const registerForm = document.querySelector(".register_form");
const loginForm = document.querySelector(".Login_form");

const showLogin = document.querySelector(".show-login");
const showRegister = document.querySelector(".show-register");

const registerBtn = document.querySelector(".register_btn");
const loginBtn = document.querySelector(".Login_btn");

const locks = document.querySelectorAll(".fa-lock");

const registerPopup = document.querySelector(".registerPopup");
const loginPopup = document.querySelector(".loginPopup");

// Show / Hide password
locks.forEach(lock => {
  lock.addEventListener("click", () => {
    const input = lock.previousElementSibling;
    input.type = input.type === "password" ? "text" : "password";
  });
});

// Switch to Login
showLogin.addEventListener("click", () => {
  registerForm.classList.remove("active");
  loginForm.classList.add("active");
});

// Switch to Register
showRegister.addEventListener("click", () => {
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
});

// Register
registerBtn.addEventListener("click", e => {
  e.preventDefault();

  const name = document.querySelector(".name").value.trim();
  const email = document.querySelector(".register-email").value.trim();
  const password = document.querySelector(".register-password").value.trim();

  if (name === "" || email === "" || password === "") {
    registerPopup.innerHTML = "All fields are required";
    return;
  }

  const data = { name, email, password };
  localStorage.setItem("user", JSON.stringify(data));

  registerPopup.innerHTML = "Register successfully";

  registerForm.classList.remove("active");
  loginForm.classList.add("active");
});

// Login
loginBtn.addEventListener("click", e => {
  e.preventDefault();

  const storedUser = localStorage.getItem("user");
  if (!storedUser) {
    loginPopup.innerHTML = "No user found";
    return;
  }

  const user = JSON.parse(storedUser);

  const email = document.querySelector(".login-email").value.trim();
  const password = document.querySelector(".login-password").value.trim();

  if (email === "" || password === "") {
    loginPopup.innerHTML = "Email and password are required";
    return;
  }

  if (email === user.email && password === user.password) {
    loginPopup.innerHTML = "Login successfully";
    window.location.href = "home.html";
  } else {
    loginPopup.innerHTML = "Invalid email or password";
  }
});
