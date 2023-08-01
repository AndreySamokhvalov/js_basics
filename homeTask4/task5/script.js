/* Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, 
только у вашей горки должно быть 20 рядов, а не 5: */

const str = "x";
let outStr = "x";

for (let i = 0; i < 20; i++) {
    console.log(outStr);
    outStr = outStr+str;
}