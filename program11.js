const readline = require("readline");

function CheckEvenOdd(iNo) 
{
    let iRemainder = 0;

    if (iNo % 2 === 0) 
    {
        return true;  // NEW: returns Boolean, not number
    } 
    else 
    {
        return false;  // NEW: returns Boolean, not number
    }
}

const rl = readline.createInterface
(
    {
        input: process.stdin,
        output: process.stdout
    }
);

rl.question("Enter a number: ", (input) => {
    let iValue = Number(input);

    let bRet = CheckEvenOdd(iValue);  // NEW: stores Boolean result in bRet variable

    if (bRet) 
    {  
        // NEW: checks if Boolean is true
        console.log(iValue + " is even");
    } 
    else 
    {
        console.log(iValue + " is odd");
    }

    rl.close();
});