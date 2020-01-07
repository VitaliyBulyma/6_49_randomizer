
var output = document.getElementById("container");
var topSixOutput = document.getElementById("topSix");
output.innerHTML= "";
topSixOutput= "";
// arrays to hold random numbers
var allNumbersArray =  [];
var topSix=[];

// call function to get how many random numbers user want to run
getNumbers(400);
console.log(allNumbersArray);


// loop to check how many times each number in the range occurs(range 1-49 inclusive)
for (var z=1; z<50;z++){
    var howManytimes=counterOfInstances(allNumbersArray,z);
    output.innerHTML += z + " occurs " + howManytimes + " times " + "<br />";
   };





// topSix.sort(function(a, b){return b-a}).slice(0,6);





/*****************************************************
 *                                                   *
 *                 FUNCTIONS                         *
 *                                                   *
 *                                                   *
****************************************************/
/*function sendValue(){
    var t = 0;
    t = document.getElementById("input").value;
    return t;
};//onclick function*/



function counterOfInstances(array,value){
    var n = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] === value){n++}
    }
    return n;
};// Counts how many times value appears in an array


function getNumbers(x){
    output.innerHTML += "By running " + x + " random numbers in a range from 1 to 49: " + "<br />";
    for (var i=1; i<=x; i++){
        allNumbersArray.push(getRandomIntInclusive(1,49)) ;
    };
}; // function to return x of random numbers within the range as string


//getSixRandNumbers();
/*function getSixRandNumbers(){
    for (var i=1; i<7; i++){
    output.innerHTML += getRandomIntInclusive(1,49) + "<br />";
    };// prints out 6 random numbers within the range to a div
};*/



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    y = Math.floor(Math.random() * (max - min + 1)) + min;
    return y;
  };// returns random number in a range inclusive min and max
