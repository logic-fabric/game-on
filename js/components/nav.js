/**
 * Module to manage side-nav menu on small screens.
 */

const mainNavigation = document.getElementById("main-nav");

// Open/close side-nav on smartphone when clicking on hamburger icon:
document.getElementById("hamburger-icon").onclick = toggleSideNav;

/* =================
   UTILITY FUNCTIONS
   ================= */

/**
 * Add/remove a CSS class that display the menu as a side-nav.
 */
function toggleSideNav() {
  mainNavigation.className =
    mainNavigation.className === "side-nav" ? "" : "side-nav";
}
