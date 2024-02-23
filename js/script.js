import { modal } from "./modal.js";
import { alertError } from "./alert-error.js";
import { IMC, notNumber, displayResultMessage } from "./utils.js";
//variables
const form = document.querySelector("form");
let inputWeight = document.querySelector("#weight");
let inputHeight = document.querySelector("#height");

// events
inputWeight.oninput = () => alertError.close();
inputHeight.oninput = () => alertError.close();

//functions
form.onsubmit = function (e) {
  e.preventDefault();
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const showAlert = notNumber(weight) || notNumber(height);

  if (showAlert) {
    alertError.open();
    return;
  }

  const result = IMC(weight, height);
  displayResultMessage(result);
};
