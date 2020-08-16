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

//Convert m into cms
let b = userInput*1000;
let c = userInput*100000;
console.log(b);
console.log(c);
//end-here
});
