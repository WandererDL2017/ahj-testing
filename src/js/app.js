/**
 * @license
 * aec.png
 * d.png
 * dc.png
 * jcb.png
 * mc.png
 * mir.png
 * visa.png
 */

import validateCardNumber from './validator';

const inputNumber = document.querySelector('.payment-method__number');
const paymentMethods = document.querySelectorAll('.payment-method__img');
const button = document.querySelector('.payment-method__button');
const textValidation = document.querySelector('.text-validation');
inputNumber.value = '';

function findAllActivePayment(namePayment) {
  Array.from(paymentMethods).forEach((payment) => {
    if (payment.alt !== namePayment) {
      payment.classList.add('payment-method__img_disabled');
    }
  });
}

function ActivePayment() {
  Array.from(paymentMethods).forEach((payment) => {
    payment.classList.remove('payment-method__img_disabled');
  });
}

Array.from(paymentMethods).forEach((payment) => {
  inputNumber.addEventListener('input', () => {
    const number = inputNumber.value;
    if (number.match(/^3[47]/)) {
      findAllActivePayment('american express');
    } else if (number.match(/^6011/)) {
      findAllActivePayment('discover');
    } else if (number.match(/^30[0-5]|^36|^38/)) {
      findAllActivePayment('diners clube');
    } else if (number.match(/^35/)) {
      findAllActivePayment('jcb');
    } else if (number.match(/^5[1-5]/)) {
      findAllActivePayment('mastercard');
    } else if (number.match(/^4/)) {
      findAllActivePayment('visa');
    } else if (number.match(/^220[0-4]/)) {
      findAllActivePayment('mir');
    } else {
      payment.classList.remove('payment-method__img_disabled');
    }
  });
});

button.addEventListener('click', (e) => {
  e.preventDefault();
  const num = inputNumber.value;

  if (validateCardNumber(num) && num !== '') {
    textValidation.className = 'valid-message';
    textValidation.innerHTML = 'valid card number';
    inputNumber.value = '';
    ActivePayment();
  } else {
    textValidation.className = 'error-message';
    textValidation.textContent = 'invalid card number';
    inputNumber.value = '';
    ActivePayment();
  }
});
