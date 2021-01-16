import { toggleNav } from "./components/nav.js";
import { openhModal } from "./components/modal.js";

/* ==============
   HAMBURGER MENU
   ============== */

const menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", toggleNav);

/* =====
   MODAL 
   ===== */

const callToActionButtons = document.querySelectorAll(".c-btn--cta");

// Open modal:
callToActionButtons.forEach((btn) =>
  btn.addEventListener("click", openhModal)
);
