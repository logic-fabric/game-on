import { toggleNav } from "./components/nav.js";
import { closeModal, openhModal } from "./components/modal.js";

/* ==============
   HAMBURGER MENU
   ============== */

const menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", toggleNav);

/* =====
   MODAL 
   ===== */

// Open modal:
const callToActionButtons = document.querySelectorAll(".c-btn--cta");

callToActionButtons.forEach((btn) => btn.addEventListener("click", openhModal));

// Clode modal:
const closeIcon = document.getElementById("close-icon");

closeIcon.addEventListener("click", closeModal);
