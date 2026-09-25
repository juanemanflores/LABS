// Refer to Task 7 in your Instructions to complete this task


const buzzWords = ["Pop", "Zap", "Bloop", "Ding", "Crack"];
 
function esPrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
 
let wordIndex = 0;
 
for (let i = 1; i <= 105; i++) {
  let output = "";
 
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  if (i % 7 === 0) output += "Woof";
 
  const esPrimoImpar = i % 2 !== 0 && esPrimo(i);
 
  if (esPrimoImpar) {
    output = buzzWords[wordIndex % buzzWords.length];
    wordIndex++;
  } else if (output === "") {
    output = i;
  }
 
  console.log(output);
}
