var firstNumber;
var secondNumber;
var symbol;
var myTotal;

firstNumber = parseFloat(prompt("Write a number"));
secondNumber = parseFloat(prompt("Write another number"));
symbol = prompt("What you want to do?" + "\n Multiply = * \n Substract = - \n Sum = + \n Divide = / ");


//functions

var myMutiply = function(num1, num2) {
	var totalMultiply = num1 * num2
	return totalMultiply;
	
} 

var mySubstrac = function(num1, num2) {
	var totalSubstract = num1 - num2
	return totalSubstract;
}

var myDivision = function(num1, num2) {
       var totalDivision = num1 / num2
	   return totalDivision;
	}


var mySum = function(num1, num2) {
	var totalSum = firstNumber + secondNumber
	return totalSum;
}


// main code

if (symbol === "*") {
	myTotal = myMutiply(firstNumber, secondNumber);
	
} else if (symbol === "-") {
	myTotal = mySubstrac(firstNumber, secondNumber);
	
} else if (symbol === "/") {
        myTotal = myDivision(firstNumber, secondNumber);
   
} else {
          myTotal = mySum(firstNumber, secondNumber);
         } 
         
                
if (secondNumber === 0  && symbol === "/") {
		 console.log("You can't divide by 0");
    } else {                     
console.log(firstNumber + " " + symbol + " " + secondNumber + " = " + myTotal);
}