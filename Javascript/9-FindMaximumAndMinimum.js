// var min = function (list) {
//   for (let i = 1; i < list.length; i++) {
//     if (list[0] > list[i]) {
//       list[0] = list[i];
//     }
//   }
//   return list[0];
// };

// var max = function (list) {
//   for (let i = 1; i < list.length; i++) {
//     if (list[0] < list[i]) {
//       list[0] = list[i];
//     }
//   }
//   return list[0];
// };

// const min = (list) => list.sort((a, b) => a - b)[0];
// const max = (list) => list.sort((a, b) => a - b).reverse()[0];

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
