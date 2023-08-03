/* 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter.
 Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене, 
начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль. */

// const products = [
//   {
//     id: 3,
//     price: 127,
//     photos: ["1.jpg", "2.jpg"],
//   },
//   {
//     id: 5,
//     price: 499,
//     photos: [],
//   },
//   {
//     id: 10,
//     price: 26,
//     photos: ["3.jpg"],
//   },
//   // {
//   //   id: 8,
//   //   price: 78,
//   // },
// ];

// const arr = products.filter((out) => {
//   if (out.photos.length < 1) return false;
//   return true;
// });
// console.log(arr);

const products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

//  филтр по фоткам
const productsWithPhotos = products.filter(
  (product) => product.photos && product.photos.length > 0
);
console.log(productsWithPhotos);

//  сортировка по цене
products.sort((a,b) => a.price - b.price);
console.log(products);
