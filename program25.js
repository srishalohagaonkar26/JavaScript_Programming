const readlineSync = require("readline-sync");

function Display(iNo)
{
    let iCnt = 0;

    //filter
    if(iNo < 0)
    {
        iNo = -iNo;
    }

    for(iCnt = 0; iCnt <= iNo; iCnt++)
    {
        console.log("Jay Ganesh.....\n");
    }
}

let iValue = 0;

iValue = readlineSync.question("Enter the frequency : \n");
iValue = Number(iValue);    //this line converts string to number as if we give an input as 5 it takes the input itself as "5" and not a number 5  so this is imp

Display(iValue);