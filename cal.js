const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return 'Cannot divide by zero';
  }
  return num1 / num2;
}

function calculator() {
  rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the operation (+, -, *, /): ', (operator) => {
      rl.question('Enter the second number: ', (num2) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        switch (operator) {
          case '+':
            console.log(`Result: ${add(num1, num2)}`);
            break;
          case '-':
            console.log(`Result: ${subtract(num1, num2)}`);
            break;
          case '*':
            console.log(`Result: ${multiply(num1, num2)}`);
            break;
          case '/':
            console.log(`Result: ${divide(num1, num2)}`);
            break;
          default:
            console.log('Invalid operator');
        }

        rl.close();
      });
    });
  });
}

calculator();
