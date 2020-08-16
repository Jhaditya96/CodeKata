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


let splitter = userInput[1].split(" ");


let arr = [];
for(let i=0;i<userInput[0];i++){
   arr.push(splitter[i])}
//console.log(arr)
let maxi = Math.max(...arr);
let mini = Math.min(...arr);
//console.log(Math.max(...arr))
//console.log(Math.min(...arr))
for(let i = 0;i<userInput[0];i++){
    if(maxi == arr[i])
    {
        var posmax = i;
    }
}

for(let i = 0;i<userInput[0];i++){
    if(mini == arr[i])
    {
        var posmin = i;
    }
}
console.log(posmax-posmin)
//end-here
});

/*
var largest = 0;

for(let i = 0;i<userInput[0];i++){
    console.log(i)
    
    if(splitter[i] > largest)
    {
       // console.log(splitter[i])
        largest = splitter[i];
        var posmax = i;
    }
}
console.log(splitter)
console.log(posmax)

//Find smallest number
var smallest = largest;

for(let i = 0;i<userInput[0];i++){
    if(splitter[i] < smallest)
    {
        smallest = splitter[i];
        var posmin = i;
    }
}
//console.log(posmin)
//console.log(posmax-posmin)

*/