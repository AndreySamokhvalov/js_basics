const firstNum = prompt("Введите первое число");
const secondNum = prompt("Введите второе число");
const threeNum = prompt("Введите третье число");

// вызов функции
getMax(firstNum, secondNum, threeNum);

function getMax(a, b, c) {
  max = a;
  if (max > b) {
    if (max > c) {
      printResult(max);
    } else {
      max = c;
      printResult(max);
    }
  } else {
    max = b;
    if (max > c) {
      printResult(max);
    } else {
      max = c;
      printResult(max);
    }
  }
}

 // функция для печати результата
function printResult(num) {
  alert(`${num} - наибольшее из введенных чисел`);
}
