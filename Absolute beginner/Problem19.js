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
let str = userInput;
let res = str[0].trim();
let newstr = res.replace(/ /g, "");
//console.log(newstr);
console.log(newstr.length);
  //end-here
});
