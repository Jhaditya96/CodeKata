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

function compressArray(original) {
	var compressed = [];
	var Value = [];
	// make a copy of the input array
	var copy = original.slice(0);
 
	// first loop goes over every element
	for (var i = 0; i < original.length; i++) {
 
		var myCount = 0;	
		// loop over every element in the copy and see if it's the same
		for (var w = 0; w < copy.length; w++) {
			if (original[i] == copy[w]) {
				// increase amount of times duplicate is found
				myCount++;
				// sets item to undefined
				delete copy[w];
			}
		}
    
		if (myCount > 0) {
			var a = new Object();
			a.count = myCount;
			a.value = original[i];
			compressed.push(a.count);
			Value.push(a.value);
		}
    }
    
    //console.log(compressed)
    for(let j = 0;j<compressed.length;j++){
        if(compressed[j] === 2){
            console.log(Value[j])
        }
    }
};

// Taking input from user and spliting it as required,sending it to funtion compressArray....
 let splinter = userInput[1].split(" ");
 var newArray = compressArray(splinter);
//end-here
});
