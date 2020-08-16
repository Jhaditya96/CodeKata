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
let a = userInput[1].split(" ");
let sum=0;

for(let i =0;i<a.length;i++){
 
    sum+=parseInt(a[i]);
 
    }
if( sum % 2 === 0 && sum % 3 === 0 &&sum % 5 === 0 ){

    console.log(1);

    
}
else
    console.log(0);


//end-here
});
