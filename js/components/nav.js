const headerNav = document.getElementById("header-nav");

export function toggleNav() {
  if (headerNav.className === "") {
    headerNav.className = "responsive";
  } else {
    headerNav.className = "";
  }
}
