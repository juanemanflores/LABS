// Refer to Task 5 in your Instructions to complete this task

const prompt = require("prompt-sync")();
 
const lines = parseInt(prompt("¿Cuántas líneas quieres generar? "));
 
for (let i = 1; i <= lines; i++) {
  let output = "";
 
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  if (i % 7 === 0) output += "Woof";
 
  console.log(output === "" ? i : output);
}