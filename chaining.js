// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// STEP ONE: Sort the numbers in descending order (10, 9, 8, 7, etc). (DONE!)
// STEP TWO: Remove any integers greater than 19.
// STEP THREE: Multiply each remaining number by 1.5 and then subtract 1.
// STEP FOUR: Then output (either in the DOM or the console) the sum of all the resulting numbers.

var chaining= integers.sort(function(first, second){return second-first
})
.filter(function(x) {
    return x <= 19
}).map(function(y) {
    return (y * 1.5) - 1
}).reduce(function(a, b) {
    return a + b;
});


console.log("after running through the functions, your new number" + " =", chaining); 




// var newArray = integers.sort(function(a, b) {
//     return b - a
// }).filter(function(x) {
//     return x <= 19
// }).map(function(y) {
//     return (y * 1.5) - 1
// }).reduce(function(a, b) {
//     return a + b;
// });
// console.log("after running through the functions, your new number" + " =", newArray);