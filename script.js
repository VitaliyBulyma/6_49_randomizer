
var output = document.getElementById("container");
var topSixOutput = document.getElementById("topSix");
output.innerHTML= "";
topSixOutput= "";
// arrays to hold random numbers
var allNumbersArray =  [];
var topSix=[];

// call function to get how many random numbers user want to run
getNumbers(60000);
// console.log(allNumbersArray);


// loop to check how many times each number in the range occurs(range 1-49 inclusive)
// add numbers to key:value pairs
var mapArray= new Map();
for (var z=1; z<50;z++){
    var howManytimes=counterOfInstances(allNumbersArray,z);
    
    mapArray.set(z,howManytimes);
    
    output.innerHTML += z + " occurs " + howManytimes + " times " + "<br />";
   }
console.log(mapArray);



/*****************************************************
 *                                                   *
 *                 FUNCTIONS                         *
 *                                                   *
 *                                                   *
****************************************************/

// Counts how many times value appears in an array
function counterOfInstances(array,value){
    var n = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] === value){n++;}
    }
    return n;
}

// function to return x of random numbers within the range as string
function getNumbers(x){
    output.innerHTML += "By running " + x + " random numbers in a range from 1 to 49: " + "<br />";
    for (var i=1; i<=x; i++){
        allNumbersArray.push(getRandomIntInclusive(1,49)) ;
    }
} 

// returns random number in a range inclusive min and max
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    y = Math.floor(Math.random() * (max - min + 1)) + min;
    return y;
  }