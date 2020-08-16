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
function getvalues(array){

     var uniqueArray = [];
        
        // Loop through array values
        for(let i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
}


let x = userInput[1].split(" ");
let uniquevalues = getvalues(x);
//console.log(uniquevalues);
let y = uniquevalues.toString();
let z = y.replace(/,/g,' ');
console.log(z);
//end-here
});
