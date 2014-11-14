// Chris T Stuart
var emailConfirmation;
var myAnswer;

emailConfirmation = prompt("Enter email");


var myConfirmation = function() {

var symbol = emailConfirmation.indexOf("@");
var symbol1 = emailConfirmation.indexOf(".");

if (emailConfirmation.length > 0 && emailConfirmation.indexOf("@@") > 0 || emailConfirmation == "") {
	 return false;	 
} else {
	return true;
}

};
	
myAnswer = myConfirmation();

console.log("It is " + myAnswer + " that your email is working.");


