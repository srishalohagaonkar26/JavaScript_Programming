const readlineSync = require("readline-sync");

    let sName = "";
    let iAge = 0;
    let fMarks = 0.0;

    console.log("Enter your name : ");
    sName = readlineSync.question();

    console.log("Enter your age : ");
    iAge = Number(readlineSync.question());

    console.log("Enter your marks : ");
    fMarks = Number(readlineSync.question());

    console.log("Name : "+sName);
    console.log("Age : "+iAge);
    console.log("Marks : "+fMarks);
