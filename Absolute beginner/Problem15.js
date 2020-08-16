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
if(userInput == 0){
    console.log("Zero");
}
else if((Math.round(userInput))%2 === 0){
    console.log("Even");
}
else{
    console.log("Odd");
}

//end-here
});
