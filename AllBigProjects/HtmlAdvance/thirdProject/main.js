// Contact button redirect
document.getElementById('contactBtn')?.addEventListener('click', () => {
  window.location.href = 'contact.html';
});

// Contact form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill all fields!";
      return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Message sent successfully!";
    contactForm.reset();
  });
}
function addReview() {
  const name = document.getElementById("reviewName").value;
  const text = document.getElementById("reviewText").value;
  const reviewList = document.getElementById("reviewList");

  if (name === "" || text === "") {
    alert("Please fill all fields");
    return;
  }

  const div = document.createElement("div");
  div.classList.add("review-card");

  div.innerHTML = `
    <p>"${text}"</p>
    <h4>— ${name}</h4>
  `;

  reviewList.appendChild(div);

  document.getElementById("reviewName").value = "";
  document.getElementById("reviewText").value = "";
}

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const page = card.getAttribute("data-page");
    window.location.href = page;
  });
});
