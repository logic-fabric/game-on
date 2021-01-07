function displayNav() {
  var headerNav = document.getElementById("header-nav");

  if (headerNav.className === "topnav") {
    headerNav.className += " responsive";
  } else {
    headerNav.className = "topnav";
  }
}

// DOM Elements
const modalBackground = document.querySelector(".c-modal__background");
const callToActionButtons = document.querySelectorAll(".c-btn--cta");
const formItems = document.querySelectorAll(".c-modal__form-item");

// launch modal event
callToActionButtons.forEach((btn) =>
  btn.addEventListener("click", launchModal)
);

// launch modal form
function launchModal() {
  modalBackground.style.display = "block";
}
