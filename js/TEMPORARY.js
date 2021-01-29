// Check a town has been selected:

const locationRadioadioButtons = document.querySelectorAll(
  'input[name="location"]'
);
const locationErrorField = document.getElementById("location-error-field");

console.log(locationErrorField);

locationRadioadioButtons.forEach((btn) =>
  btn.addEventListener("focusout", () => {
    const checkedRadioButtons = document.querySelector(
      'input[name="location"]:checked'
    );

    console.log(checkedRadioButtons);

    if (checkedRadioButtons !== null) {
      locationErrorField.style.color = NEUTRAL_COLOR;
    } else {
      locationErrorField.style.color = DANGER_COLOR;
    }
  })
);