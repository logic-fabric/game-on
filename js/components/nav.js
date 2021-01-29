const mainNavigation = document.getElementById("main-nav");

// Open/close side-nav on smartphone when clicking on hamburger icon:
document.getElementById("hamburger-icon").onclick = toggleSideNav;

function toggleSideNav() {
  mainNavigation.className =
    mainNavigation.className === "side-nav" ? "" : "side-nav";
}
