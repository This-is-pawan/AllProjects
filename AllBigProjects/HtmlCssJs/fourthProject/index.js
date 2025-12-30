// Simple Frontend Registration & Login using Local Storage

// Register
const registerForm = document.getElementById('registerForm');
if(registerForm){
  registerForm.addEventListener('submit', function(e){
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = { username, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration Successful!');
    window.location.href = 'login.html';
  });
}

// Login
const loginForm = document.getElementById('loginForm');
if(loginForm){
  loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const savedUser = JSON.parse(localStorage.getItem('user'));
    if(savedUser && savedUser.email === email && savedUser.password === password){
      alert(`Welcome, ${savedUser.username}!`);
      window.location.href = 'index.html';
    } else {
      alert('Invalid email or password!');
    }
  });
}
