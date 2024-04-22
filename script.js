'use strict';

const form = document.getElementById('form');
const userInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const showMessage = (msg) => {
  output.innerText = msg;
  output.classList.remove('hidden');
  output.classList.add('alert');
};

const hideMessage = () => {
  output.classList.add('hidden');
  output.classList.remove('alert');
};

const showOutput = (result) => {
  output.textContent = result;
  output.classList.remove('hidden');
};

const isValid = (input) => {
  const number = parseInt(input, 10);
  if (!input || input.match(/[e.]/g)) {
    showMessage('Please enter a valid number.');
  } else if (number < 1) {
    showMessage('Please enter a number greater than or equal to 1.');
  } else if (number > 3999) {
    showMessage('Please enter a number less than or equal to 3999.');
  } else {
    return true;
  }
  return false;
};

const convertToRoman = (num) => {
  const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
  ];

  let result = '';
  for (const numeral of romanNumerals) {
    while (num >= numeral.value) {
      result += numeral.symbol;
      num -= numeral.value;
    }
  }

  return result;
};

const updateUI = (input) => {
  hideMessage();

  if (isValid(input)) {
    const result = convertToRoman(parseInt(input, 10));
    showOutput(result);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

convertBtn.addEventListener('click', () => {
  updateUI(userInput.value);
});

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && userInput.value !== '') {
    updateUI(userInput.value);
  }
});
