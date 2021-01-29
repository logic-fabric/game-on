const modalBackground = document.getElementById("modal-bg");
const modalWindow = document.getElementById("modal-window");

// Open modal when clicking on signin button:
document.getElementById("signin-btn").onclick = openModal;

// Close modal when clicking on (x) icon in modal:
document.getElementById("close-icon").onclick = closeModal;

// Close modal when clicking outside modal window:
modalWindow.onclick = (e) => e.stopPropagation();
modalBackground.onclick = closeModal;

function openModal() {
  modalBackground.style.display = "block";
}

function closeModal() {
  modalBackground.style.display = "none";
}
