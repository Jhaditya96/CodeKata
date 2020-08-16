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
let a=[10,'Arun',16.6];
console.log(parseInt(userInput[0])+parseInt(userInput[1]));
  
//end-here
});

