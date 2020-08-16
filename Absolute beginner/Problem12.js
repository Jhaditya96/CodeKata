const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here

let a = userInput[0]*(9/5)+32;
console.log(a.toFixed(2));
//end-here
});
