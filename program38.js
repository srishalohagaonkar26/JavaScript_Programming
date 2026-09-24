//  type 3

const readlineSync = require("readline-sync");

class NumberX
{
    //  if there is object the function must not be static
    CheckDivisible(iNo)
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
}

let iValue = 0;
let bRet = 0;
let nobj = 0;

console.log("Enter Number : ");
iValue = Number(readlineSync.question());

nobj = new NumberX();    //object of checkdivisible as no static word which is technically optional
bRet = nobj.CheckDivisible(iValue);

if(bRet == true)
{
    console.log("Number is divisible by 3 and 5 ");
}
else
{
    console.log("Number is not divisible by 3 and 5 ");
}