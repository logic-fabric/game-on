const hamburgerIcon = document.getElementById("hamburger-icon");
const mainNavigation = document.getElementById("main-nav");

// Open/close side-nav on smartphone when clicking on hamburger icon:
hamburgerIcon.addEventListener("click", toggleSideNav);

function toggleSideNav() {
  mainNavigation.className =
    mainNavigation.className === "side-nav" ? "" : "side-nav";
}
