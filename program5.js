const readlineSync = require("readline-sync");      //  #include stdio.h

function AddTwoNumbers(fNo1, fNo2)
{
  let fAns = 0;

  fAns = fNo1 + fNo2;

  return fAns;
}

let fValue1 = 0;
let fValue2 = 0;
let fValue3 = 0;

let input1 = readlineSync.question("Enter 1st no : ");
fValue1 = parseFloat(input1);   //parseint separates 2 number or else 2 numbers would be string

let input2 = readlineSync.question("Enter 2nd no : ");
fValue2 = parseFloat(input2);

fValue3 = fValue1 + fValue2;

console.log("Addition is : "+fValue3);      //printf

/*
  readlineSync.question : does 2 things at once printf and scanf too

  readlineSync.question takes input as text, so parseInt() converts it to a number before math
*/