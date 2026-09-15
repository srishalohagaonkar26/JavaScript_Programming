//type 1

const readlineSync = require("readline-sync");

let iValue = 0;

console.log("Enter Number : ");
iValue = Number(readlineSync.question());

if((iValue % 3 == 0) && (iValue % 5 == 0))
{
    console.log("Number is divisible by 3 and 5");
}
else
{
    console.log("Number is not divisible by 3 and 5");
}