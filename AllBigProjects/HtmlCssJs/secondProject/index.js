// Show alert message on Home
function showMessage() {
  document.getElementById("msg").innerText = "Thanks for joining! 🚀";
}

// Contact form submission
function submitForm(event) {
  event.preventDefault();
  document.getElementById("contactMsg").innerText = "Your message has been sent! ✅";
  document.getElementById("contactForm").reset();
}

// Optional: Single page navigation (if you want to use sections)
function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");
}
