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
//Code to find min out of 3 numbers
let splitter = userInput[0].split(" ");
console.log(Math.min(splitter[0],splitter[1]));
//end-here
});
