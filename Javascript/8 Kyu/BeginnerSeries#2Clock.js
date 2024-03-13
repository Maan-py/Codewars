function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

console.log(past(1, 1, 1));
