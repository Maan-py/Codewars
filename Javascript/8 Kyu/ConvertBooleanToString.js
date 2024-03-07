function booleanToString(b) {
  let hasil;
  if (b === true) {
    hasil = "true";
  } else if (b === false) {
    hasil = "false";
  }

  return hasil;
}

console.log(booleanToString(true));
