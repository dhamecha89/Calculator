let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let result = null;

// Functions for button actions
function appendNumber(number) {
  if (currentInput === '' && number === '.') currentInput = '0';
  if (currentInput.includes('.') && number === '.') return;
  currentInput += number;
  display.innerText = currentInput;
}

function appendOperator(op) {
  if (currentInput === '' && op !== '-') return;
  if (result === null) result = parseFloat(currentInput);
  else calculate();
  operator = op;
  currentInput = '';
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  result = null;
  display.innerText = '0';
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  display.innerText = currentInput || '0';
}

function calculate() {
  if (operator && currentInput) {
    let num = parseFloat(currentInput);
    switch (operator) {
      case '+': result += num; break;
      case '-': result -= num; break;
      case '*': result *= num; break;
      case '/': result /= num; break;
      case '%': result %= num; break;
    }
    display.innerText = result;
    currentInput = '';
    operator = '';
  }
}
