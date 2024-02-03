// const reverseSeq = (n) => {
//   let hasil = [];

//   for (let i = n; i > 0; i--) {
//     hasil.push(i);
//   }

//   return hasil;
// };

// const reverseSeq = (n) => {
//   return Array(n)
//     .fill()
//     .map((el, i) => i + 1)
//     .reverse();
// };

const reverseSeq = (n) => [...Array(n)].map((el, i) => n - i);

