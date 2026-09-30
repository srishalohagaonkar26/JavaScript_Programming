//  input : 5
//  output : 1 2 3 4   

const readlineSync = require("readline-sync");

function DisplayFactors(iNo)
{
    let iCnt = 0;
    let iSum = 0;

    for(iCnt = 1; iCnt <= (iNo / 2); iCnt++)
    {
        if((iNo % iCnt) == 0)
        {
            iSum = iSum + iCnt;
        }
    }

    console.log("Summation of factors is : "+iSum);
}

let iValue = 0;

console.log("Enter Number : ");
iValue = Number(readlineSync.question());

DisplayFactors(iValue);