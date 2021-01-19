const modalBackground = document.getElementById("modal-bg");
const modalWindow = document.getElementById("modal-window");

export function closeModal() {
  modalBackground.style.display = "none";
}

export function openhModal() {
  modalBackground.style.display = "block";
}

modalWindow.addEventListener("click", (e) => e.stopPropagation());
modalBackground.addEventListener("click", closeModal);
