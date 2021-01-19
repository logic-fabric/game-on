/* ============================
   HEADER MENU ON SMALL SCREENS
   ============================ */

const menuIcon = document.getElementById("menu-icon");
const headerNav = document.getElementById("header-nav");

menuIcon.addEventListener("click", toggleNav);

export function toggleNav() {
  if (headerNav.className === "") {
    headerNav.className = "responsive";
  } else {
    headerNav.className = "";
  }
}
