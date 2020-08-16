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
let splitter = userInput[0].split(" ");
let result = (-1 * splitter[1] + Math.sqrt(Math.pow(splitter[1], 2) - (4 * splitter[0] * splitter[2]))) / (2 * splitter[0]);
let result2 = (-1 * splitter[1] - Math.sqrt(Math.pow(splitter[1], 2) - (4 * splitter[0] * splitter[2]))) / (2 * splitter[0]);
console.log(result.toFixed(2));
 console.log(result2.toFixed(2)); 
//end-here
});
