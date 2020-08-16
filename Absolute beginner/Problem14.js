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

if((userInput % 100 === 0) ? (userInput % 400 === 0) : (userInput % 4 === 0)){
    console.log("Y");
}
else{
    console.log("N");
}
//end-here
});
