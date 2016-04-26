//.reverse
var colors = ["red", "blue", "green", "zebra"];
var reversed = colors.reverse();
console.log("reverse", reversed );

//.sort strings
var sortedColors = colors.sort();
console.log("sorted colors", sortedColors );
var sortedReversedColors = sortedColors.reverse(); //had to just use 1?
console.log("colors reversed ", sortedReversedColors);

//.sort numbers
var numbers = [20, 10, 3, 6, 59, 100, 55];
var sorted = numbers.sort();
console.log("sort", sorted );

//.sort(funtion(1st, 2nd) {return 1st - 2nd});
var assend = numbers.sort(function(first, second) {
  return first - second;
});
console.log("assend", assend );

//.join()  - array into a string
var joinedColors = colors.join(",");
console.log("joined items.. ", joinedColors);

//.slice()
var fruits = ["Banana", "Apple", "Orange", "Pear"];
var oldfruits = fruits.slice(2,4);  //after 2 to before 4
console.log("sliced fruits", oldfruits );
console.log("slice to end", fruits.slice(1) ); // stat at 1, include all after

//.indexOf()
var colors = ["red", "blue", "green", "zebra"];
console.log("index of green is... ", colors.indexOf("green") ); // shows 2

//.join() and then .split() into new array
var joinedColors = colors.join(",");
console.log("joined colors.. ", joinedColors);
var newColorArray = joinedColors.split(",");
console.log("newColorArray.. ", newColorArray );

//.split - takes a string and creates array
var teams = "jets,cubs,hawks";
var newTeams = teams.split(",");
console.log("split.. ", newTeams);

//.forEach(function() {});
var colors = ["red", "blue", "green", "zebra"];
colors.forEach(function(showthemall) {  //says forEach of Var do this
  console.log(showthemall);
});

//.map(function(var) { });  - creates a new array
var colors = ["red", "blue", "green", "zebra"];
var reversedColors = colors.map(function(newMapClr) {
  return newMapClr.split("").reverse().join(""); //return used
});
console.log("newrevcolors.. ", reversedColors); //array with word backwards
//chaining methods .map, filter

//filter returns true OR false - true in new array, false not
//you set condition and test

//.filter(function(var) { }); - creates a new array
var colors = ["red", "blue", "green", "zebra", "Gray"];
var fourLetters = colors.filter(function(newFilterClr) {
  return newFilterClr.length === 4;
});
console.log("filter, 4 letters", fourLetters );
//Noticed you return something but it's = to var fourletters

//reduce takes every item and makes them 1 value

//.reduce(function())
var numbers = [2, 5, 10, 90, 3, 5];
var sum = numbers.reduce(function (prev, curr) {
  return prev + curr;
});
console.log("sum total.. ", sum );
// return becomes sum

//example of chaining functions

var words = ["the", "ball", "is", "round"];
var sentence = words.filter(function(newSent) {
  return newSent.length > 2; // takes out 2 letter words
}).reduce(function (prev, curr) {
  return prev + " " + curr;
});

console.log("show minus 2 letter words.. ", sentence );
// return = sentence - log var setence

// VIDEO 2 - CALLBACK FUNCTION

//undefined - nothing passed into this function
// function hello(message) {
//   alert(message);
// }
// hello();

// function hi(greeting) {
//   alert(greeting);
// }
// hi("This works");


//invoke function 1 and then it invokes function 2
//callback funtion - function reference passed to another function

function one(functionToInvoke) {
 console.log ("one");
 functionToInvoke();
}
function two() {
  console.log("two");
}
function three() {
  console.log("three");
}
function four() {
  console.log("four");
}
one(four); //passed it 'four' to one and passes fn 4