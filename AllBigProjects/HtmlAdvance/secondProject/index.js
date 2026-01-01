// ===== REGISTER =====
const registerForm = document.getElementById("registerForm");
if(registerForm) {
  registerForm.addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Save user in localStorage
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful!");
    window.location.href = "login.html";
  });
}

// ===== LOGIN =====
const loginForm = document.getElementById("loginForm");
if(loginForm) {
  loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if(!storedUser) {
      alert("No registered user found! Please register first.");
      return;
    }

    if(storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
      window.location.href = "dashboard.html";
    } else {
      alert("Email or password is incorrect!");
    }
  });
}

// ===== DASHBOARD =====
const userName = document.getElementById("userName");
if(userName) {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if(!loggedInUser) {
    window.location.href = "login.html";
  } else {
    userName.textContent = loggedInUser.name;
  }
}

// ===== LOGOUT =====
const logoutBtn = document.getElementById("logoutBtn");
if(logoutBtn) {
  logoutBtn.addEventListener("click", function(){
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
  });
}
