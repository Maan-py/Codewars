// const x = [1, 2, 3, 4];

// function grow(x) {
//   let result = 1;

//   for (let i = 1; i < x.length; i++) {
//     result *= x[i];
//   }

//   return result;
// }

// console.log(grow(x));

const x = [5, 4, 2, 1];

function grow(x) {
  const result = x.reduce((acc, curr) => acc * curr, 1);

  return result;
}

console.log(grow(x));
