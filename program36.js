//  type 2

const readlineSync = require("readline-sync");

function CheckDivisible(iNo)
{
    if((iNo %3 == 0) && (iNo % 5 == 0))
    {
        return true;
    }
    else
    {
        return false;
    }
}

let iValue = 0;
let bRet = 0;

console.log("Enter Number : ");
iValue = Number(readlineSync.question());

bRet = CheckDivisible(iValue);

if(bRet == true)
{
    console.log("Number is divisible by 3 and 5 ");
}
else
{
    console.log("Number is not divisible by 3 and 5 ");
}