// first problem
var myResult;
var myNumerino = 3.2214647648726638;
var numberInPlace = 5;

var myNumbers = function(number1, number2) {
	
	var myTotal = number1.toFixed(number2);
	return myTotal;
	
};

myResult = myNumbers(myNumerino, numberInPlace);
console.log("Your number formated into 4 spaces is: " + myResult);



