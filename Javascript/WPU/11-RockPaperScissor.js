// const rps = (p1, p2) => {
//   const getMsg = (n) => `Player ${n} won!`;
//   let hasil;

//   if (p1 === p2) {
//     hasil = "Draw!";
//   } else if (p1 === "rock") {
//     hasil = (p2 === "scissors") ? getMsg(1) : getMsg(2);
//   } else if (p1 === "paper") {
//      hasil = (p2 === "rock") ? getMsg(1) : getMsg(2);
//   } else if (p1 === "scissors") {
//      hasil = (p2 === "paper") ? getMsg(1) : getMsg(2);
//   }

//   return hasil;
// };

const rps = (p1, p2) => {
  const rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  if(p1 === p2) {
    return "Draw!"
  } else {
    return `Player ${(rules.p1 === p2) ? "1" : "2"} won!`
  }
};

console.log(rps("paper", "rock"));
