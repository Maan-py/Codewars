// function sumArray(array) {
//   let result = 0;

//   if (array === null || array.length <= 2) {
//     return 0;
//   }

//   const sorted = array.sort((a, b) => a - b);

//   for (i = 1; i < sorted.length - 1; i++) {
//     result += sorted[i];
//   }

//   return result;
// }

function sumArray(array) {
  if (array == null || array.length <= 2) {
    return 0;
  }

  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, curr) => acc + curr);
}

console.log(sumArray([6, 2, 1, 8, 10]));
