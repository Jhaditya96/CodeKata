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
  if(userInput>0){
console.log(userInput*userInput);}
  else if(userInput == 0){
  console.log("0");
  }
  else{
  console.log("Error");}
  //end-here
});
