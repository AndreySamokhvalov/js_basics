const min = 0;
const max = 9;
const arr = [];
let sum = 0;
const searchNum = 3;

getArr();
sumArr(arr);
minNum(arr);
search(arr);

//  получение рандомного числа
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// заполнение массива
function getArr() {
  for (let i = 0; i < 5; i++) {
    arr.push(getRandomNum(min, max));
  }
  console.log(arr);
}

// сумма элементов
function sumArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum = sum + element;
  }
  console.log(`Сумма элементов: ${sum}`);
}

//  минимальное число
function minNum(arr) {
  let minNum = Math.min(...arr);
  console.log(`Минимальный элемент: ${minNum}`);
}

// поиск числа
function search(arr) {
  arr.indexOf(searchNum, 0);
  if (arr.indexOf(searchNum, 0) === -1) {
    console.log(`Элемента ${searchNum} в массиве нет`);
  } else {
    console.log(
      `Элемент ${searchNum} под индексом ${arr.indexOf(searchNum, 0)}`
    );
  }
}
