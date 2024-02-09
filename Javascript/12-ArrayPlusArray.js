// function arrayPlusArray(arr1, arr2) {
//   let hasil = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     hasil += arr1[i]
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     hasil += arr2[i]
//   }
//   return hasil;
// }

// function arrayPlusArray(arr1, arr2) {
//     let hasil = 0;
//     for(let i = 0; i < arguments.length; i++) {
//         for(let j = 0; j < arguments[i].length;  j++) {
//             hasil += arguments[i][j];
//         }
//     }

//     return hasil;
// }

const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, curr) => acc + curr);

console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));
