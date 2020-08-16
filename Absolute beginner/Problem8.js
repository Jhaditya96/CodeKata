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

//Find cube
let a = Math.pow(userInput[0],3);
console.log(a);
//end-here
});
