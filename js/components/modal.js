const closeIcon = document.getElementById("close-icon");
const modalBackground = document.getElementById("modal-bg");
const modalWindow = document.getElementById("modal-window");
const signinButton = document.getElementById("signin-btn");

// Open modal when clicking on signin button:
signinButton.addEventListener("click", openModal);

// Close modal when clicking on (x) icon in modal:
closeIcon.addEventListener("click", closeModal);

// Close modal when clicking outside modal window:
modalWindow.addEventListener("click", (e) => e.stopPropagation());
modalBackground.addEventListener("click", closeModal);

function openModal() {
  modalBackground.style.display = "block";
}

function closeModal() {
  modalBackground.style.display = "none";
}
