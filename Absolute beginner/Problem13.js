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
let SI = (splitter[0]*splitter[1]*splitter[2])/100;
console.log(SI.toFixed(2));
//end-here
});
