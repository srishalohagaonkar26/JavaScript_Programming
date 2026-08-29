const readlineSync = require("readline-sync");

let iCnt = 0;
let iValue = 0;

iValue = readlineSync.question("Enter the frequency : \n");
iValue = Number(iValue);    //this line converts string to number as if we give an input as 5 it takes the input itself as "5" and not a number 5  so this is imp

for(iCnt = 0; iCnt <= iValue; iCnt++)
{
    console.log("Jay Ganesh.....\n");
}