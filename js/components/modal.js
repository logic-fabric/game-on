/* ===========
   CLOSE MODAL
   =========== */

// Close modal with close icon:
const closeIcon = document.getElementById("close-icon");

closeIcon.addEventListener("click", closeModal);

// close modal by clicking outside modal window:
const modalBackground = document.getElementById("modal-bg");
const modalWindow = document.getElementById("modal-window");

modalWindow.addEventListener("click", (e) => e.stopPropagation());
modalBackground.addEventListener("click", closeModal);

function closeModal() {
  modalBackground.style.display = "none";
}

export function openhModal() {
  modalBackground.style.display = "block";
}
