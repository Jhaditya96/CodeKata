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

//Print first 3 multiple of "N"
let a = userInput*1;
let b = userInput*2;
let c = userInput*3;
console.log(a+" "+b+" "+c);
//end-here
});
