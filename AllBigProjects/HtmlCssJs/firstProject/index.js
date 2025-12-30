const form = document.getElementById("myForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
console.log({name,email,password});

  if (name === "" || email === "" || password === "") {
    message.style.color = "red";
    message.innerText = "All fields are required!";
  } else {
    message.style.color = "green";
    message.innerText = "Form submitted successfully!";
    form.reset();
  }
});
