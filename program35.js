//  type 2

const readlineSync = require("readline-sync");

function CheckDivisible(iNo)
{
    if((iNo % 3 == 0 ) && (iNo % 5 == 0))
    {
        console.log("Number is divisible by 3 and 5");
    }
    else
    {
        console.log("Number is not divisible by 3 and 5");
    }
}

//  Main()
let iValue = 0;

console.log("Enter a number : ");           //printf
iValue = Number(readlineSync.question());       //scanf

CheckDivisible(iValue);