// function hero(bullets, dragons) {
//   if (bullets / 2 >= dragons) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function hero(bullets, dragon) {
//     return (bullets / 2 >= dragon) ? true : false;
// }

const hero = (bullets, dragon) => (bullets / 2 >= dragon);

console.log(hero(1500, 751));
