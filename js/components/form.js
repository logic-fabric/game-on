/**
 * Module to manage sign-in form checkings.
 */

const PARTICIPANTS_MINIMUM_AGE = 16;

const NAME_MESSAGE =
  "Deux caractères minimum, sans chiffre, caractère spécial ou espace inutile";
const EMAIL_MESSAGE = "Vous devez saisir une adresse mail valide";
const BIRTHDATE_MESSAGE = `Vous devez indiquer une date valide et avoir plus de ${PARTICIPANTS_MINIMUM_AGE} ans`;
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

const birthdate = document.getElementById("birthdate");
const birthdateError = document.querySelector("#birthdate + p");

const previousParticipations = document.getElementById(
  "previous-participations"
);
const previousParticipationsError = document.querySelector(
  "#previous-participations + p"
);

const locationRadioadioButtons = document.querySelectorAll(
  'input[name="location"]'
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

// Check birthdate:
birthdate.oninput = () => {
  displayBirthdateValidity(birthdate, birthdateError);
};
birthdate.addEventListener("focusout", () => {
  displayBirthdateValidity(birthdate, birthdateError);
});

// Check previous participations:
previousParticipations.addEventListener("focusout", () => {
  displayParticipationsValidity(
    previousParticipations,
    previousParticipationsError
  );
});

previousParticipations.onchange = () => {
  displayParticipationsValidity(
    previousParticipations,
    previousParticipationsError
  );
};

// Check if a town has been selected:
locationRadioadioButtons.forEach((btn) =>
  btn.addEventListener("change", () => {
    const checkedRadioButtons = document.querySelector(
      'input[name="location"]:checked'
    );

    if (checkedRadioButtons !== null) {
      locationError.textContent = "";
      locationError.classList.remove("txt-danger");
    } else {
      locationError.textContent = LOCATION_MESSAGE;
      locationError.classList.add("txt-danger");
    }
  })
);

// Check if general conditions have been checked:
generalConditionsOptin.onchange = () => {
  displayOptinValidity(generalConditionsOptin, generalConditionsOptinError);
};

/* ====================
   CHECK FORM ON SUBMIT
   ==================== */

document.getElementById("modal-form").onsubmit = (e) => {
  e.preventDefault();

  removeAllErrors();

  displayFirstNameValidity(firstName, firstNameError);
  displayLastNameValidity(lastName, lastNameError);
  displayEmailValidity(email, emailError);
  displayBirthdateValidity(birthdate, birthdateError);
  displayParticipationsValidity(
    previousParticipations,
    previousParticipationsError
  );
  displayLocationValidity(locationError);
  displayOptinValidity(generalConditionsOptin, generalConditionsOptinError);

  if (isValidForm()) {
    displaySuccessfullSignin();
  }
};

/* =================
   UTILITY FUNCTIONS
   ================= */

/**
 * Check if a name has 2 or more characters.
 * @param {string} name
 * @returns {boolean}
 */
const isValidName = (name) => {
  const nameRegex = /^[a-zA-Z]+[a-zA-Z -]*[a-zA-Z]$/;

  return nameRegex.test(name);
};

/**
 * Check if birthdate can be converted as a date and if it corresponds to an age of at least PARTICIPANTS_MINIMUM_AGE.
 * @param {string} birthdate
 * @returns {boolean}
 */
const isValidBirthdate = (birthdate) => {
  const date = new Date(birthdate);

  if (!(date instanceof Date) || isNaN(date)) {
    return false;
  }

  const now = Date.now();
  const ONE_YEAR_IN_MILLISECONDS = 365.25 * 24 * 60 * 60 * 1000;
  const age = (now - date) / ONE_YEAR_IN_MILLISECONDS;

  return age >= PARTICIPANTS_MINIMUM_AGE;
};

/**
 * Check if a number of participations is defined and is between 0 and 20.
 * @param {number} quantity
 * @returns {boolean}
 */
const isValidParticipationsQuantity = (quantity) => {
  return (
    previousParticipations.value !== "" &&
    Number(previousParticipations.value) >= 0 &&
    Number(previousParticipations.value) <= 20
  );
};

/**
 * Check if first name, last name, email, birthdate, number of participations, location and general conditions opt-in are valid before submitting.
 * @returns {boolean}
 */
const isValidForm = () => {
  const checkedRadioButtons = document.querySelector(
    'input[name="location"]:checked'
  );

  return (
    isValidName(firstName.value) &&
    isValidName(lastName.value) &&
    email.validity.valid &&
    isValidBirthdate(birthdate.value) &&
    isValidParticipationsQuantity(previousParticipations.value) &&
    checkedRadioButtons !== null &&
    generalConditionsOptin.checked
  );
};

/**
 * Display/remove error message about first name validity.
 * @param {HTMLElement.<input>} inputField
 * @param {HTMLElement.<p>} errorField
 */
const displayFirstNameValidity = (inputField, errorField) => {
  if (isValidName(inputField.value)) {
    inputField.classList.remove("border-danger");

    errorField.textContent = "";
    errorField.classList.remove("txt-danger");
  } else {
    inputField.classList.add("border-danger");

    errorField.textContent = NAME_MESSAGE;
    errorField.classList.add("txt-danger");
  }
};

/**
 * Display/remove error message about last name validity.
 * @param {HTMLElement.<input>} inputField
 * @param {HTMLElement.<p>} errorField
 */
const displayLastNameValidity = (inputField, errorField) => {
  if (isValidName(inputField.value)) {
    inputField.classList.remove("border-danger");

    errorField.textContent = "";
    errorField.classList.remove("txt-danger");
  } else {
    inputField.classList.add("border-danger");

    errorField.textContent = NAME_MESSAGE;
    errorField.classList.add("txt-danger");
  }
};

/**
 * Display/remove error message about email validity.
 * @param {HTMLElement.<input>} emailField
 * @param {HTMLElement.<p>} errorField
 */
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

/**
 * Display/remove error message about birthdate validity.
 * @param {HTMLElement.<input>} birthdateField
 * @param {HTMLElement.<p>} errorField
 */
const displayBirthdateValidity = (birthdateField, errorField) => {
  if (isValidBirthdate(birthdateField.value)) {
    birthdateField.classList.remove("border-danger");

    errorField.textContent = "";
    errorField.classList.remove("txt-danger");
  } else {
    birthdateField.classList.add("border-danger");

    errorField.textContent = BIRTHDATE_MESSAGE;
    errorField.classList.add("txt-danger");
  }
};

/**
 * Display/remove error message about number of previous participations validity.
 * @param {HTMLElement.<input>} participationsField
 * @param {HTMLElement.<p>} errorField
 */
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

/**
 * Display/remove error message about location selection.
 * @param {HTMLElement/<p>} errorField
 */
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

/**
 * Display/remove error message about general conditions opt-in checking.
 * @param {HTMLElement.<input>} optinField
 * @param {HTMLElement.<p>} errorField
 */
const displayOptinValidity = (optinField, errorField) => {
  if (optinField.checked) {
    errorField.textContent = "";
    errorField.classList.remove("txt-danger");
  } else {
    errorField.textContent = OPTIN_MESSAGE;
    errorField.classList.add("txt-danger");
  }
};

/**
 * Remove sign-in form and display success message in modal.
 */
const displaySuccessfullSignin = () => {
  const modalFormWrapper = document.getElementById("modal-form-wrapper");
  const modalSuccessWrapper = document.getElementById("modal-success-wrapper");

  const modalHeight = getComputedStyle(modalFormWrapper).height;

  modalFormWrapper.style.height = 0;
  modalSuccessWrapper.style.height = modalHeight;
};

/**
 * Remove all error messages on the form.
 */
export const removeAllErrors = () => {
  const errorFields = [
    firstNameError,
    lastNameError,
    emailError,
    birthdateError,
    previousParticipationsError,
    locationError,
    generalConditionsOptinError,
  ];
  const inputFields = document.querySelectorAll("input");

  for (const errorField of errorFields) {
    errorField.textContent = "";
    errorField.classList.remove("txt-danger");
  }

  for (let inputField of inputFields) {
    inputField.classList.remove("border-danger");
  }
};
