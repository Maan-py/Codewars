function getGrade(...s) {
  const avg = s.reduce((acc, curr) => acc + curr) / s.length;

  if (avg >= 90 && avg <= 100) {
    return "A";
  } else if (avg >= 80 && avg < 90) {
    return "B";
  } else if (avg >= 70 && avg < 80) {
    return "C";
  } else if (avg >= 60 && avg < 70) {
    return "D";
  } else if (avg >= 0 && avg < 60) {
    return "F";
  }
}

console.log(getGrade(89, 89, 90));
