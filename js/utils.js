import { modal } from "./modal.js";

export function notNumber(value) {
  return isNaN(value) || value == "";
}

export function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

export function displayResultMessage(result) {
  const message = (modal.Message.innerText = `seu IMC é: ${result}`);
  modal.open();
}
