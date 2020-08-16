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

//Find the larges among 3 inputs
if(userInput[0]>userInput[1]){
    
    if(userInput[0]>userInput[2]){
        console.log(userInput[0]);
    }
    else{
        console.log(userInput[2]);
    }
}
else if (userInput[1]>userInput[2]){
    console.log(userInput[1]);
}
else{
    console.log(userInput[2]);
}        

//end-here
});
