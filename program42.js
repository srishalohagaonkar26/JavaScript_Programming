const readlineSync = require("readline-sync");

class NumberX
{
    SumFactors(iNo)
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
    }
}

let iValue = 0;
let nobj = 0;

console.log("Enter Number : ");
iValue = Number(readlineSync.question());

nobj = new NumberX;
nobj.SumFactors(iValue);

console.log("Summation of factors is : "+iSum);