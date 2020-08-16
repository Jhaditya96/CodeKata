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

//Area of Equilateral triangle
let area = (Math.sqrt(3)/4)*userInput*userInput;
console.log(area.toFixed(2));
//end-here
});
