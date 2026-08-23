const readlineSync = require("readline-sync");

function CalculateTicketPrice(iAge) 
{
    //Input Updater
    if(iAge < 0)
    {
        console.log("Invalid Input");
        iAge = -iAge;
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