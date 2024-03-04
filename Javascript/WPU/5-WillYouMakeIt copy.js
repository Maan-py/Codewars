// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   if (fuelLeft * mpg >= distanceToPump) {
//     return true;
//   } else {
//     return false;
//   }
// };

const zeroFuel = (distanceToPump, mpg, fuelLeft) => fuelLeft * mpg >= distanceToPump;

console.log(zeroFuel(100, 50, 1));
