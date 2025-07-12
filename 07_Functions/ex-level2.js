/*
1. Linear equation is calculated as follows: _ax + by + c = 0_. Write a function which calculates value of a linear equation, _solveLinEquation_.
*/
/* 
pseudocode
create a function
get a, b, c
solve:
by = -ax-c
y  = -a/b*x - c/b
return y
*/
function solveLinEquation(a, b, c) {
  let y, x, step1, step2;
  step1 = (-a/b).toFixed(3);
  step2 = c/b;
  y = `${step1}*x - ${step2}`;

  return y;
}
console.log(solveLinEquation(2, 3, 6));
//----------------------------------------------------------------------
/*
1. Quadratic equation is calculated as follows: _ax2 + bx + c = 0_. Write a function which calculates value or values of a quadratic equation, _solveQuadEquation_.

    ```js
    console.log(solveQuadratic()) // {0}
    console.log(solveQuadratic(1, 4, 4)) // {-2}
    console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    console.log(solveQuadratic(1, -1, 0)) //{1, 0}
*/
/*
pseudocode
create function
function takes a, b, c on a start
calculates descriminant
D = b*b-4ac
if D>0 two solutions
x1 = (-b- sqwr(D))/2a
x2 = (-b+ sqwr(D))/2a
if D=0 one solution
x = -b/2a
if D<0 no sollution

*/
function solveQuadEquation(a = 1, b = 0, c = 1) {
let descriminant = b*b-4*a*c;
if (descriminant>0) {
let x1 = (-b - Math.sqrt(descriminant))/2*a;
let x2 = (-b + Math.sqrt(descriminant))/2*a;
return {x1, x2};
} else if (descriminant==0) {
let x = -b/2*a;
return {x}
} else {
return 0;
}
}
console.log(solveQuadEquation()) // {0}
console.log(solveQuadEquation(1, 4, 4)) // {-2}
console.log(solveQuadEquation(1, -1, -2)) // {2, -1}
console.log(solveQuadEquation(1, 7, 12)) // {-3, -4}
console.log(solveQuadEquation(1, 0, -4)) //{2, -2}
console.log(solveQuadEquation(1, -1, 0)) //{1, 0}

/*
1. Declare a function name _printArray_. It takes array as a parameter and it prints out each value of the array.
*/
/*
pseudocode
create array
create function
takes array created before
create a loop
print as long as array.lenght is
*/


function printArray(arr) {
for (let i=0; i < arr.length; i++) {
console.log(arr[i]);
}
}
let array = [1, 2, 3, 4, 5];
printArray(array);

/* Write a function name _showDateTime_ which shows time in this format: 08/01/2020 04:08 using the Date object.
    showDateTime()
    08/01/2020 04:08
*/
/*
pseudocode
declare function
get date 
day/month/year time
*/
(function() {
let now = new Date();
let date = now.getDate() + '/' + (now.getMonth()+1) + '/' + now.getFullYear();
let time = now.getHours() + ':' + now.getMinutes();
console.log(date + ' ' + time);
}
)()

/*
Declare a function name _swapValues_. This function swaps value of x to y.

    ```js
    swapValues(3, 4) // x => 4, y=>3
    swapValues(4, 5) // x = 5, y = 4
*/
function swapValues(x, y){
let newX = y;
let newY = x;
return "x = " + newX + ", " + "y = " + newY;
}
console.log(swapValues(3, 4)) // x => 4, y=>3

/*
Declare a function name _reverseArray_. It takes array as a parameter and it returns the reverse of the array (don't use method).

    ```js
    console.log(reverseArray([1, 2, 3, 4, 5]))
    //[5, 4, 3, 2, 1]
    console.log(reverseArray(['A', 'B', 'C']))
    //['C', 'B', 'A']
*/
//DIDN"T USE METHOD
function reverseArray(arr){
let newArray = [];
for (let i = 0; i<arr.length; i++){
newArray[i] = arr[arr.length-i-1];
}
return newArray;
}
console.log(reverseArray([1, 2, 3, 4, 5]))

//USED METHOD
function reverseArray2(arr){
return arr.reverse();
}
console.log(reverseArray2([1, 2, 3, 4, 5]))

