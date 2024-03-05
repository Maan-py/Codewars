function repeatStr(n, s) {
  let str = "";

  for (let i = 1; i <= n; i++) {
    str += s;
  }

  return str;
}

console.log(repeatStr(5, "Hello"));
