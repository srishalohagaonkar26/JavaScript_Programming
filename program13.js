/* 
    the new shit of installing package in this code as discussed in the prev code
*/
const readline = require("readline");

const rl = readline.createInterface
({
    input: process.stdin,
    output: process.stdout
});

function CalculateTicketPrice(iAge) 
{
    let iRemainder = 0;

    if (iAge >= 0 && iAge <= 5) 
    {
        return 0;  
    } 
    else if(iAge >= 6 && iAge <= 18)
    {
        return 500; 
    }
    else if(iAge >= 19 && iAge <= 50)
    {
        return 900;
    }
    else
    {
        return 400;
    }
}

rl.question("Please enter your age to calculate ticket price : ", (input) => 
{
    let iValue = Number(input);
    let iRet = CalculateTicketPrice(iValue);
    console.log("Your ticket price will be " + iRet + " rupees");
    rl.close();
});