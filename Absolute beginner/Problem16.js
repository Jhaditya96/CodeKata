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
let str = '';
for (let i = 1; i <= userInput; i++) {
  str += 9*i + ' ';
}
console.log(str.trim());
  //end-here
});
