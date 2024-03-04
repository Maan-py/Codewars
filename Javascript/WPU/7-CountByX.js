// function countBy(x, n) {
//   let z = [];

//   for (let i = x; i <= x * n; i += x) {
//     z.push(i);
//   }

//   return z;
// }

// const countBy = (x, n) => {
//   let z = [];

//   for (let i = x; i <= x * n; i += x) {
//     z.push(i);
//   }

//   return z;
// };

const countBy = (x, n) => [...Array(n)].map((e, i) => (i + 1) * x);

console.log(countBy(5, 5));
