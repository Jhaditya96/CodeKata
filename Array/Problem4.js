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
let sum =0;
let a = 1000;
let b = 1000;

let n = userInput[0];
//console.log(a);
//console.log(b);
//console.log(n);
if(n==1)
 {
    let c = parseInt(a)+parseInt(b)
    sum = c;
}
else
{
    for(let i=0;i<n-1;i++)
    {
      let c = parseInt(a)+parseInt(b);
      //console.log(c);
      if(a===1000 && b===1000)
      {
        let temp = parseInt(a) + parseInt(b);
        sum += temp + c; 
      }
      else{sum += c;}
        a = b
        b = c
    }
}
console.log(sum)//Answer:
//end-here
});
