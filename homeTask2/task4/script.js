
// для консоли
const num = 1234;
// console.log(typeof(num));
let tmp = num; // получаем единицы
let units = tmp%10;
tmp = Math.floor(tmp/10);
let dozens = tmp%10; // получаем десятки
tmp = Math.floor(tmp/10);
let hundreds = tmp%10; // получаем сотни

console.log(`В числе ${num}  сотен: ${hundreds} десятков: ${dozens} единиц ${units}`);



// // для браузера

// let num = Number(prompt("Введите число"));
// if (num >= 0 && typeof num === "number") {
//   let tmp = num; // получаем единицы
//   let units = tmp % 10;
//   tmp = Math.floor(tmp / 10);
//   let dozens = tmp % 10; // получаем десятки
//   tmp = Math.floor(tmp / 10);
//   let hundreds = tmp % 10; // получаем сотни
//   alert(
//     `В числе ${num}  сотен: ${hundreds} десятков: ${dozens} единиц ${units}`
//   );
// } else {
//   alert("Неккоректное число");
// }
