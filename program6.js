/*
    START
        Accept no as No
        If No is completely divisible by 2 
            then priint even
        otherwise
            print odd
    STOP

    START
        Accept number as No
        Divide No as 2
        If remainder is 0
            then print as even
        otherwise
            print as odd
    STOP
*/

const readlineSync = require("readline-sync");      //  #include stdio.h

let iValue = 0;
let iRemainder = 0;

iValue = readlineSync.question("Enter 1st no : ");
iValue = parseInt(iValue);   //parseint separates 2 number or else 2 numbers would be string

iRemainder = iValue % 2;

if(iRemainder == 0)
{
    console.log("Number is even\n");
}
else
{
    console.log("Number is odd\n");
}
