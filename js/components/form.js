const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const previousParticipations = document.getElementById(
  "previous-participations"
);
const generalConditionsOptin = document.getElementById(
  "general-conditions-optin"
);

// Bypass submit:
document.getElementById("modal-form").onsubmit = (e) => e.preventDefault();

// Check first name validity:
firstName.oninput = () => {
  const errorField = document.querySelector("#first-name + p");
  displayNameValidity(firstName, errorField);
};

// Check last name validity:
lastName.oninput = () => {
  const errorField = document.querySelector("#last-name + p");
  displayNameValidity(lastName, errorField);
};

// Check email validity:
email.oninput = () => {
  const errorField = document.querySelector("#email + p");
  displayEmailValidity(email, errorField);
};

// Check previous participations:
previousParticipations.addEventListener("focusout", () => {
  const errorField = document.querySelector("#previous-participations + p");
  displayParticipationsValidity(previousParticipations, errorField);
});

previousParticipations.onchange = () => {
  const errorField = document.querySelector("#previous-participations + p");
  displayParticipationsValidity(previousParticipations, errorField);
};

// Check if general conditions have been checked:
generalConditionsOptin.onchange = () => {
  const errorField = document.querySelector("#general-conditions-optin ~ p");
  displayOptinValidity(generalConditionsOptin, errorField);
};

/* =================
   UTILITY FUNCTIONS
   ================= */

const isValidName = (name) => {
  return name.length > 2;
};

const isValidParticipationsQuantity = (quantity) => {
  return (
    previousParticipations.value !== "" &&
    Number(previousParticipations.value) >= 0 &&
    Number(previousParticipations.value) <= 20
  );
};

const displayNameValidity = (inputField, errorField) => {
  if (isValidName(inputField.value)) {
    inputField.classList.remove("border-danger");
    errorField.classList.remove("txt-danger");
  } else {
    inputField.classList.add("border-danger");
    errorField.classList.add("txt-danger");
  }
};

const displayEmailValidity = (emailField, errorField) => {
  if (email.validity.valid) {
    emailField.classList.remove("border-danger");
    errorField.classList.remove("txt-danger");
  } else {
    emailField.classList.add("border-danger");
    errorField.classList.add("txt-danger");
  }
};

const displayParticipationsValidity = (participationsField, errorField) => {
  if (isValidParticipationsQuantity(previousParticipations.value)) {
    participationsField.classList.remove("border-danger");
    errorField.classList.remove("txt-danger");
  } else {
    participationsField.classList.add("border-danger");
    errorField.classList.add("txt-danger");
  }
};

const displayOptinValidity = (optinField, errorField) => {
  if (optinField.checked) {
    errorField.classList.remove("txt-danger");
  } else {
    errorField.classList.add("txt-danger");
  }
};
