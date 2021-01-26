const DANGER_COLOR = "#ff4e60";
const NEUTRAL_COLOR = "#232323";

// Bypass submit:
const modalForm = document.getElementById("modal-form");

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Check first name validity:
const firstName = document.getElementById("first-name");

firstName.addEventListener("input", () => {
  const errorField = document.querySelector("#first-name + p");

  displayNameValidity(firstName, errorField);
});

// Check last name validity:
const lastName = document.getElementById("last-name");

lastName.addEventListener("input", () => {
  const errorField = document.querySelector("#last-name + p");

  displayNameValidity(lastName, errorField);
});

// Check email validity:
const email = document.getElementById("email");

email.addEventListener("input", () => {
  const errorField = document.querySelector("#email + p");

  if (email.validity.valid) {
    email.style.borderColor = NEUTRAL_COLOR;
    errorField.style.color = NEUTRAL_COLOR;
  } else {
    email.style.borderColor = DANGER_COLOR;
    errorField.style.color = DANGER_COLOR;
  }
});

// Check previous participations:
const previousParticipations = document.getElementById(
  "previous-participations"
);

previousParticipations.addEventListener("focusout", () => {
  const errorField = document.querySelector("#previous-participations + p");

  if (
    previousParticipations.value !== "" &&
    Number(previousParticipations.value) >= 0 &&
    Number(previousParticipations.value) <= 20
  ) {
    previousParticipations.style.borderColor = NEUTRAL_COLOR;
    errorField.style.color = NEUTRAL_COLOR;
  } else {
    previousParticipations.style.borderColor = DANGER_COLOR;
    errorField.style.color = DANGER_COLOR;
  }
});

// Check if general conditions have been checked:
const generalConditionsOptin = document.getElementById(
  "general-conditions-optin"
);

generalConditionsOptin.addEventListener("change", () => {
  const errorField = document.querySelector("#general-conditions-optin ~ p");

  if (generalConditionsOptin.checked) {
    errorField.style.color = NEUTRAL_COLOR;
  } else {
    errorField.style.color = DANGER_COLOR;
  }
});

/* =================
   UTILITY FUNCTIONS
   ================= */
function isValidName(name) {
  return name.length > 2;
}

function displayNameValidity(inputField, errorField) {
  if (isValidName(inputField.value)) {
    inputField.style.borderColor = NEUTRAL_COLOR;
    errorField.style.color = NEUTRAL_COLOR;
  } else {
    inputField.style.borderColor = DANGER_COLOR;
    errorField.style.color = DANGER_COLOR;
  }
}
