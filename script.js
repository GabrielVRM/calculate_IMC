//variables
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

const btnClose = document.querySelector('.close');
const modalOpen = document.querySelector('.modal-wrapper');

const modalSpan = document.querySelector('span');

//events

//functions
form.onsubmit = function (e) {
  e.preventDefault();
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = IMC(weight, height);
  const message = (modalSpan.innerText = `seu IMC é: ${result}`);

  modalOpen.classList.add('open');
  console.log(result);
};

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
