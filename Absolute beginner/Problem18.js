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
function fact(x){
    if(x == 0){
        return 1;
    }
    else{
        return x*fact(x-1);
    }
}
console.log(fact(userInput));
  //end-here
});
