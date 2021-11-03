/**
 * Module to manage opening and closing modal events.
 */

import { removeAllErrors } from "./form.js";

const modalBackground = document.getElementById("modal-bg");
const modalWindow = document.getElementById("modal-window");
const modalFormWrapper = document.getElementById("modal-form-wrapper");
const modalSuccessWrapper = document.getElementById("modal-success-wrapper");

/* =================
   UTILITY FUNCTIONS
   ================= */

/**
 * Open modal.
 * Form appears and success message is masked if previously displayed.
 */
function openModal() {
  document.getElementById("modal-form").reset();
  removeAllErrors();

  modalFormWrapper.style.height = "auto";
  modalSuccessWrapper.style.height = 0;

  modalBackground.style.display = "block";
}

/**
 * Close modal.
 */
function closeModal() {
  modalBackground.style.display = "none";
}

/* ============
   MODAL EVENTS
   ============ */

// Open modal when clicking on signin button:
document.getElementById("signin-btn").onclick = openModal;

// Close modal when clicking on (x) icon in modal:
document.getElementById("close-icon").onclick = closeModal;

// Close modal when clicking outside modal window:
modalWindow.onclick = (e) => e.stopPropagation();
modalBackground.onclick = closeModal;

// Close modal when clicking on clode button after successfull sign-in:
document.getElementById("close-modal-btn").onclick = closeModal;
