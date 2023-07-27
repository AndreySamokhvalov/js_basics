// Создайте функцию которая возводит переданное число в куб,
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const firstNum = 2;
const secondNum = 3;

//  функция возводящая в куб
function degree(num) {
  let result = num * num * num;
  return result;
}

console.log(`${firstNum} в кубе = ${degree(firstNum)}`);
console.log(`${secondNum} в кубе = ${degree(secondNum)}`);
console.log(`Сумма кубов = ${degree(firstNum) + degree(secondNum)}`);

