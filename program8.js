const readlineSync = require("readline-sync");      //  #include stdio.h

function CheckEvenOdd(iNo)
{
    let iRemainder = 0;
    iRemainder = iNo % 2;

    return iRemainder;
}

let iValue = 0;
let iRet = 0;

iValue = readlineSync.question("Enter a no : ");
iValue = parseInt(iValue);   //parseint separates 2 number or else 2 numbers would be string

iRet = CheckEvenOdd(iValue);

if(iRet === 0)
{
    console.log("Number is even\n");
}
else
{
    console.log("Number is odd\n");
}