const signinButton = document.getElementById("signin-btn");
const modal = document.getElementById("modal");

signinButton.addEventListener("click", openModal);

function openModal() {
  modal.style.display = "block";
}
