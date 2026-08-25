const readlineSync = require("readline-sync");

const AGE_INVALID = -1;

function CalculateTicketPrice(iAge) 
{
    //Input Updater
    if(iAge < 0)
    {
        return AGE_INVALID;
    }
    
    if (iAge >= 0 && iAge <= 5) 
    {
        return 0;
    } 
    else if (iAge >= 6 && iAge <= 18) 
    {
        return 500;
    } 
    else if (iAge >= 19 && iAge <= 50) 
    {
        return 900;
    } 
    else 
    {
        return 400;
    }
}

let iValue = 0;

iValue = readlineSync.question("Please enter your age to calculate ticket price : ");

let iRet = CalculateTicketPrice(iValue);

console.log("Your ticket price will be " + iRet + " rupees");

if(iRet === AGE_INVALID)
{
    console.log("Please enter positive age gng ;-;\n");
}
else
{
    console.log("Your ticket price will be " +iRet+ "rupees\n");
}