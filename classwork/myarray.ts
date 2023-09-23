let myArray = [1,2,3];
myArray.push(4);
console.log(myArray); //[ 1, 2, 3, 4 ]
//================================================================

myArray.pop();// will pop last element of array

console.log("I M POP",myArray);

//================================================================
myArray = [1,2,3,4,5,6,7];
myArray.shift();// will shift start 0 index element of array
console.log("I M Shift",myArray);
//================================================================
console.log("Array Length Before Unshift:",myArray.length)
myArray.unshift(9);// will unshift/add  start 0 index element of array
console.log("I M unshift",myArray);
console.log("Array Length After Unshift:",myArray.length)
//================================================================
let myArrayStr = ['a','b'];
myArrayStr= myArrayStr.concat ('c');
console.log("After concat c :",myArrayStr);// ['a','b','c']
//================================================================
myArrayStr = ['a','b','c'];
let myArrayStr2 = myArrayStr.join('-');
console.log("Array values joined with - in place of , :",myArrayStr2);
//================================================================
myArrayStr = ['a','b','c','d'];
let mySlice:string[]= myArrayStr.slice(2);
console.log("My Sliced Array value",mySlice)

console.log("Zero Start 3rd Element Index",myArrayStr.indexOf('d'))
if (myArrayStr.indexOf('c')== 2)
{
    console.log("I m C at 2nd index  ",myArrayStr.indexOf('c'))
}

if (myArrayStr.includes('b'))
{
    console.log("myArrayStr has a value b in it")
}



//============================================================================
let myNumber = [3,5,6,8];
var promptSync = require('prompt-sync')();

let mySearch = (myNumber.find((obj) => obj === 6));

console.log("I m at index2 value=6 Right :", mySearch)
console.log( myNumber.indexOf (6))

let obj = promptSync("Enter Number to compare :")
console.log("I m Obj :",obj)

myNumber = [2,4,3,5];
console.log(myNumber)
mySearch = (myNumber.findIndex((obj) => obj % 2 !== 0));
console.log("Element index with remainder not zero :", mySearch)

myNumber = [3,5,6,8];
console.log("Array Values Before Mapping and Multiply", myNumber)
let myMultiply2 = myNumber.map((n) => n*2);
console.log ("Array x 2 :",myMultiply2)

myNumber = [1,4,7,8];
myMultiply2 = myNumber.filter((n) => n%2===0);
console.log("Array Values Filtered", myMultiply2)

myNumber = [2,4,3,7];
let test1 = myNumber.reduce((acc,cur) => acc + cur);
console.log("Reduced as sum up val ", test1)

myNumber = [2,3,4,5];
let test = myNumber.every((x) => x<6);
if (test)
{

    console.log("All values in array are less than 6")
}

myNumber = [3,5,6,8];
let test2 = myNumber.every((n) => n>6);
if (test2)
{

    console.log("Some values in array are > than 6")
}

myNumber = [1,2,3,4,5];
let revArray = myNumber.reverse();
console.log("Reverse array", revArray);

myNumber = [3,5,7,8];
let valAt2 = myNumber.at(2);
console.log("Values at index 2",valAt2)








//================================================================














