// function feast(beast, dish) {
//   // if(beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) ? true : false; {
//   //     return true;
//   // } else {
//   //     return false;
//   // }

//   return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false;
// }

const feast = (beast, dish) => (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false);

console.log(feast("great blue heron", "garlic naan"));
