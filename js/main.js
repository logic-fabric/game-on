import {} from "./components/nav.js";
import { closeModal, openhModal } from "./components/modal.js";

/* =====
   MODAL 
   ===== */

// OPEN MODAL:
const callToActionButtons = document.querySelectorAll(".c-btn--cta");

callToActionButtons.forEach((btn) => btn.addEventListener("click", openhModal));

// CLOSE MODAL:
const closeIcon = document.getElementById("close-icon");

closeIcon.addEventListener("click", closeModal);
