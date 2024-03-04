// function DNAtoRNA(dna) {
//   // create a function which returns an RNA sequence from the given DNA sequence
//   let result = dna.split("");
//   for(let i = 0; i < result.length; i++) {{
//     if(result[i] == "T") {
//         result[i] = "U"
//     }
//   }}

//   return result.join("");
// }

// function DNAtoRNA(dna) {
//   return dna
//     .split("")
//     .map((e) => (e === "T" ? "U" : e))
//     .join("");
// }

// const DNAtoRNA = (dna) => dna.replace(/T/g, "U");

// const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

const DNAtoRNA = (dna) => dna.split("T").join("U");

console.log(DNAtoRNA("GCAT"));
