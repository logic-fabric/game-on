const signinButton = document.getElementById("signin-btn");
const modal = document.getElementById("modal");
const closeIcon = document.getElementById("close-icon");

// Open modal when clicking on signin button:
signinButton.addEventListener("click", openModal);

// Close modal when clicking on (x) icon in modal:
closeIcon.addEventListener("click", closeModal);

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
