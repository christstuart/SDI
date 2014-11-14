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


var myNames = "Chris, John, Damel";
var myComa  = ",";
var mySlash = "/";



var myStrings = function(name1, name2, name3) {
	
	var newName = "";
	
	var splitNames = name1.split(name2);

for (var i = 0; i < splitNames.length; i++) {
	
	newName = newName + splitNames[i] + name3 	  
	
}	
	return newName;