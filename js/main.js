import {} from "./components/nav.js";
import { openhModal } from "./components/modal.js";

// OPEN MODAL with sign-in button:
const callToActionButtons = document.querySelectorAll(".c-btn--cta");

callToActionButtons.forEach((btn) => btn.addEventListener("click", openhModal));
