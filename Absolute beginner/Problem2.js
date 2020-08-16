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
//Circumferance Of circle
let a= 2*Math.PI*userInput[0];
let circumference = a.toFixed(2);
  if(circumference>0){
console.log(circumference);}
  else{
  console.log("error");}
//end-here
});
