function monkeyCount(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(i + 1);
  }

  return array;
}

console.log(monkeyCount(5));
