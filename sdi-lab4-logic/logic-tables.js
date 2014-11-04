//  NAME:  Chris T Stuart
//  DATE:  November 4, 2014
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

//var p;
//var q;
//var r;

//p = confirm("First value:  Click OK for true or Cancel for false.");
//q = confirm("Second value:  Click OK for true or Cancel for false.");
//r = confirm("Third value:  Click OK for true or Cancel for false.");

//if ((p && !q)|| r){
  //  console.log("With " + p + " and " + q + ", the outcome is TRUE.");
//} else {
  //  console.log("With " + p + " and " + q + ", the outcome is FALSE.");
//};

// world problem 1
var totalCost     = 12.00;
var seniorAge     = 55;
var discountMoney = 7.00;
var youngAge      = 10;
var yourAge;


yourAge = prompt("What's your age?");

if (yourAge >= 55 || yourAge < 10 ) {
	
	parseInt(console.log( "You need to pay " + "$5"))
	
} else {
	console.log( "You need to pay " + "$12.00")
	
}

// word problem 2
var frontLeftTire = 36, frontRightTire = 36, backLeftTire = 35, backRightTire = 35;



if(frontRightTire === frontLeftTire && backLeftTire === backRightTire){
	console.log("The tires are up to specifications")
	
} else {
	console.log("They are not to specifications")
	
}







