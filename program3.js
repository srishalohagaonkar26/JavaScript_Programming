/*
  In C, #include<stdio.h> tells the compiler where printf and scanf
  come from — without it, the compiler wouldn't recognize them.
  In Node.js, prompt() and alert() don't exist at all (they're
  browser-only tools, not part of core JS). To get similar input
  functionality here, we install an external package (readline-sync)
  and load it with require('readline-sync'), which is Node's
  equivalent of an #include line — it tells Node where readlineSync's
  functions come from.
*/

const readlineSync = require("readline-sync");      //  #include stdio.h

let i = 0;
let j = 0;
let k = 0;

let input1 = readlineSync.question("Enter 1st no : ");
i = parseInt(input1);   //parseint separates 2 number or else 2 numbers would be string

let input2 = readlineSync.question("Enter 2nd no : ");
j = parseInt(input2);

k = i + j;

console.log("Addition is : "+k);      //printf

/*
    readlineSync.question : does 2 things at once printf and scanf too

    readlineSync.question takes input as text, so parseInt() converts it to a number before math
*/