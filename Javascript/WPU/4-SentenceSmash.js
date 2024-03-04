function smash(words) {
  let hasil = "";
  for (let i = 0; i < words.length; i++) {
    hasil += words[i];
    if (i != words.length - 1) {
      hasil += " ";
    }
  }

  return hasil;
}

// const smash = (words) => words.join(" ");
