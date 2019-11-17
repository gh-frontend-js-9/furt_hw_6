// Find in array: sum, min and max, replace min and max - create custom functions
console.log("task-1");

let numb = [1, 200, 39, 6, 2, 90];

function calcSum (arr){
  let sum = 0;
  for (let i=0; i<arr.length; i++){
    sum += arr[i];
  }
  console.log(sum);
}
calcSum(numb);

function calcMaxMin() {
	let min = Math.min.apply(null, numb);
	console.log(min);
	let max = Math.max.apply(null, numb);
	console.log(max);
	
	}
calcMaxMin();


// Create a function that will replace all number dividing three with ‘foo’, 
// dividing seven with ‘bar’ and dividing three and seven with ‘foobar’. 
// Function with n params.
console.log("task-2");

function foobar() {
for ( let n = 0; n<=60; n++) {
	 if (n%3 == 0 && n%7 == 0) {
		console.log ("foobar");
	} else if (n%3 == 0) {
		console.log ("foo");
	} else if (n%7 == 0)  {
		console.log ( "bar");
	} else {
		console.log (n);
	}	
	}
}
foobar();

//Create function which will return function with callback in arguments
console.log("task-3");

function startTraining(time, callback) {
  console.log(`The training starts at ${time}`);
  callback();
}
function finishTraining(){
  console.log('Training is over.');
}
startTraining ('9 a.m.', finishTraining);


// Create function with 2 string params. 
// It must check if letters in the first correspond to the number of 
// matches in second and return %.

console.log('task-4')

checkStrings("language", "land");
function checkStrings(first, second) {
    let match = 0;
    for (let i = 0; i < first.length; i++) {
        for (let k = 0; k < second.length; k++) {
            if (first[i] == second[k]) {
                match++;
            }
        }
    }
    let perc = match / (first.length + second.length) * 100;
    console.log("percent = " + perc + '%');
}
