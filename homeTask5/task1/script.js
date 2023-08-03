/* Дан объект numbers. Необходимо в консоль 
вывести все значения больше или равные 3. */

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
  };
  
  function bigNum1() {
      const moreThree = [];
    for (const key in numbers) {
      if (numbers[key] >= 3) {
          moreThree.push(numbers[key])
      }
    }
    console.log(moreThree);
  }
  
  function bigNum2() {
      const arr = Object.values(numbers);
      const arrUp= arr.filter(item=> item>=3);
      console.log(arrUp);
  }
  
  
  bigNum1();
// или так
  bigNum2();