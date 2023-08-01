/* Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7] */

const array = [1, 2, 3, 4, 5, 6, 7];


// по индексам
index_version(array);
function index_version(arr) {
  const inputArr = arr.slice();
  const newArr = inputArr.slice(0, 3);
  const tmp = inputArr.pop();
  newArr.push(inputArr.pop());
  newArr.push(tmp);
  console.log(newArr);
}

// с использованием arr.splice(str)
splice_version(array);
function splice_version(arr) {
  const inputArr = arr.slice();
  inputArr.splice(3, 2);
  console.log(inputArr);
}

// вариант через forEach
forEach_version(array);
function forEach_version(arr) {
  const inputArr = arr.slice();
  const newArr = [];
  arr.forEach((element, inputArr) => {
    if (element !== 4) {
      if (element !== 5) {
        newArr.push(element);
      }
    }
  });
  console.log(newArr);
}

// // с помощью slice
slice_version(array);
function slice_version(arr) {
  const inputArr = arr.slice();
  const newArr1 = inputArr.slice(0, 3);
  const newArr2 = inputArr.slice(5);
  for (let i = 0; i < newArr2.length; i++) {
    const element = newArr2[i];
    newArr1.push(element);
  }
  console.log(newArr1);
}
