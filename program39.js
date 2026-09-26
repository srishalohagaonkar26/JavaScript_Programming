//  input : 5
//  output : 1 2 3 4   

const readlineSync = require("readline-sync");

function Display(iNo)
{
    let iCnt = 0;

    for(iCnt = 1; iCnt <= iNo; iCnt = iCnt + 1)
    {
        console.log(+iCnt);
    }
}

let iValue = 0;

console.log("Enter Number : ");
iValue = Number(readlineSync.question());

Display(iValue);