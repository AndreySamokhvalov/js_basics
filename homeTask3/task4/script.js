let firstNum = Number(prompt("Введите первое число"));
let secondNum = Number(prompt("Введите второе число"));

// функция сложения
function sum(num1, num2) {
  return num1 + num2;
}

// функция умножения
const mult = (num1, num2) => num1 * num2;

// функция деления
function division(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    alert("Делить на ноль нельзя");
    console.log("Делить на ноль нельзя");
  }
}

// функция вычитания
function subtraction(num1, num2) {
  if (num1 >= num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
}

// вывод в браузер
alert (`Сумма чисел ${firstNum} и ${secondNum} равна ${sum(firstNum,secondNum)}`);
alert (`Произведение чисел ${firstNum} и ${secondNum} равна ${mult(firstNum,secondNum)}`);
alert (`Частное от деления чисел ${firstNum} и ${secondNum} равна ${division(firstNum,secondNum)}`);
alert (`Разность чисел ${firstNum} и ${secondNum} равна ${subtraction(firstNum,secondNum)}`);

// вывод в консоль
console.log (`Сумма чисел ${firstNum} и ${secondNum} равна ${sum(firstNum,secondNum)}`);
console.log (`Произведение чисел ${firstNum} и ${secondNum} равна ${mult(firstNum,secondNum)}`);
console.log (`Частное от деления чисел ${firstNum} и ${secondNum} равна ${division(firstNum,secondNum)}`);
console.log (`Разность чисел ${firstNum} и ${secondNum} равна ${subtraction(firstNum,secondNum)}`);