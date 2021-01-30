const FIRST_NAME_MESSAGE =
  "Vous devez saisir un prénom d'au moins 2 caractères";
const LAST_NAME_MESSAGE = "Vous devez saisir un nom d'au moins 2 caractères";
const EMAIL_MESSAGE = "Vous devez saisir une adresse mail valide";
const PARTICIPATIONS_MESSAGE =
  "Vous devez saisir un nombre de participations entre 0 et 20";
const LOCATION_MESSAGE = "Vous devez choisir une ville";
const OPTIN_MESSAGE = "Vous devez accepter les conditions d'utilisation";

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

const locationError = document.getElementById("location-error-field");

const generalConditionsOptin = document.getElementById(
  "general-conditions-optin"
);
const generalConditionsOptinError = document.querySelector(
  "#general-conditions-optin ~ p"
);

/* =======================
   CHECK FIELDS ON THE FLY
   ======================= */

// Check first name validity:
firstName.oninput = () => {
  displayFirstNameValidity(firstName, firstNameError);
};

firstName.addEventListener("focusout", () => {
  displayFirstNameValidity(firstName, firstNameError);
});

// Check last name validity:
lastName.oninput = () => {
  displayLastNameValidity(lastName, lastNameError);
};

lastName.addEventListener("focusout", () => {
  displayLastNameValidity(lastName, lastNameError);
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

/* ====================
   CHECK FORM ON SUBMIT
   ==================== */

document.getElementById("modal-form").onsubmit = (e) => {
  e.preventDefault();

  displayLocationValidity(locationError);
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

const displayFirstNameValidity = (inputField, errorField) => {
  if (isValidName(inputField.value)) {
    inputField.classList.remove("border-danger");

    errorField.textContent = "";
    errorField.classList.remove("txt-danger");
  } else {
    inputField.classList.add("border-danger");

    errorField.textContent = FIRST_NAME_MESSAGE;
    errorField.classList.add("txt-danger");
  }
};

const displayLastNameValidity = (inputField, errorField) => {
  if (isValidName(inputField.value)) {
    inputField.classList.remove("border-danger");

    errorField.textContent = "";
    errorField.classList.remove("txt-danger");
  } else {
    inputField.classList.add("border-danger");

    errorField.textContent = LAST_NAME_MESSAGE;
    errorField.classList.add("txt-danger");
  }
};

const displayEmailValidity = (emailField, errorField) => {
  if (email.validity.valid) {
    emailField.classList.remove("border-danger");

    errorField.textContent = "";
    errorField.classList.remove("txt-danger");
  } else {
    emailField.classList.add("border-danger");

    errorField.textContent = EMAIL_MESSAGE;
    errorField.classList.add("txt-danger");
  }
};

const displayParticipationsValidity = (participationsField, errorField) => {
  if (isValidParticipationsQuantity(previousParticipations.value)) {
    participationsField.classList.remove("border-danger");

    errorField.textContent = "";
    errorField.classList.remove("txt-danger");
  } else {
    participationsField.classList.add("border-danger");

    errorField.textContent = PARTICIPATIONS_MESSAGE;
    errorField.classList.add("txt-danger");
  }
};

const displayLocationValidity = (errorField) => {
  const checkedRadioButtons = document.querySelector(
    'input[name="location"]:checked'
  );

  if (checkedRadioButtons !== null) {
    errorField.textContent = "";
    errorField.classList.remove("txt-danger");
  } else {
    errorField.textContent = LOCATION_MESSAGE;
    errorField.classList.add("txt-danger");
  }
};

const displayOptinValidity = (optinField, errorField) => {
  if (optinField.checked) {
    errorField.textContent = "";
    errorField.classList.remove("txt-danger");
  } else {
    errorField.textContent = OPTIN_MESSAGE;
    errorField.classList.add("txt-danger");
  }
};
