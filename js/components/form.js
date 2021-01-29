const firstName = document.getElementById("first-name");
const firstNameError = document.querySelector("#first-name + p");

const lastName = document.getElementById("last-name");
const lastNameError = document.querySelector("#last-name + p");

const email = document.getElementById("email");
const emailError = document.querySelector("#email + p");

const previousParticipations = document.getElementById(
  "previous-participations"
);
const previousParticpationsError = document.querySelector(
  "#previous-participations + p"
);

const generalConditionsOptin = document.getElementById(
  "general-conditions-optin"
);
const generalConditionsOptinError = document.querySelector(
  "#general-conditions-optin ~ p"
);

// Bypass submit:
document.getElementById("modal-form").onsubmit = (e) => e.preventDefault();

// Check first name validity:
firstName.oninput = () => {
  displayNameValidity(firstName, firstNameError);
};

firstName.addEventListener("focusout", () => {
  displayNameValidity(firstName, firstNameError);
});

// Check last name validity:
lastName.oninput = () => {
  displayNameValidity(lastName, lastNameError);
};

lastName.addEventListener("focusout", () => {
  displayNameValidity(lastName, lastNameError);
});

// Check email validity:
email.oninput = () => {
  displayEmailValidity(email, emailError);
};

email.addEventListener("focusout", () => {
  displayEmailValidity(email, emailError);
});

// Check previous participations:
previousParticipations.addEventListener("focusout", () => {
  displayParticipationsValidity(
    previousParticipations,
    previousParticpationsError
  );
});

previousParticipations.onchange = () => {
  displayParticipationsValidity(
    previousParticipations,
    previousParticpationsError
  );
};

// Check if general conditions have been checked:
generalConditionsOptin.onchange = () => {
  displayOptinValidity(generalConditionsOptin, generalConditionsOptinError);
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
