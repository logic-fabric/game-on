/* ==============
   HAMBURGER MENU
   ============== */

const menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", toggleNav);

function toggleNav() {
  var headerNav = document.getElementById("header-nav");

  if (headerNav.className === "") {
    headerNav.className = "responsive";
  } else {
    headerNav.className = "";
  }
}

/* =====
   MODAL 
   ===== */

const modalBackground = document.getElementById("modal__background");
const callToActionButtons = document.querySelectorAll(".c-btn--cta");
const formItems = document.querySelectorAll(".c-modal__form-item");

// Open modal:
callToActionButtons.forEach((btn) =>
  btn.addEventListener("click", launchModal)
);

function launchModal() {
  modalBackground.style.display = "block";
}
