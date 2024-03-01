function sumMix(x) {
    return x.map((angka) => parseInt(angka)).reduce((acc, curr) => acc + curr);
}

console.log(sumMix([9, 3, "7", "3"]));
