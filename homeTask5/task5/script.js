/* Вам необходимо объединить 2 этих массива, чтобы значения первого 
массива были ключами, а значения второго массива — значениями. */


const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const multiLang = new Object;
for (let i = 0; i < en.length; i++) {
    multiLang[en[i]]=ru[i];
}
console.log(multiLang);