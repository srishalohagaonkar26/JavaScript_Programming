/* 
    if you use "readline" in your code then line 7 to 11 is comp to write
    in your code which takes input from keyboard and gives output on the 
    console

    then instead of writing the typical main function we need to write 
    new code from line 40
*/

/*
    if you dont want to write such a complex one then install apackage from 
    cmd to use inbuilt 'readline' without doing this all shit in your code 
*/

//  refer next program for this new shit of installing (program13.js) 

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