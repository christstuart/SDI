// problem 1

var numbers  = 3;
var numbers1 = 5;
var done;
var result;


var myNumbers = function(num, num1) {
	
	var sum = 0;
	
	for (var i = 0; i < 1000; i++) {
		if (i%num == 0 || i%num1 == 0) {
			sum = sum + i
		}
		
	}
	return sum
};

done = myNumbers(numbers, numbers1);
console.log(done + " is the sum of all the factors of 3 and 5");


// problem 2


var myLottery = function() {
	
	var myNumbersInside = [];
	
	
	for ( var i = 0; i < 5; i++) {
	    
	 var myMath = Math.floor((Math.random() * (59 + 1) ) + 1 ) 
		myNumbersInside.push(myMath);
			
	}
	
	for ( var i = 0; i < 1; i++) {
	    
	 var myPower = Math.floor(Math.random() * (35 + 1) ) 
		myNumbersInside.push(myPower);
			
	}
	
	return myNumbersInside
};

result = myLottery();
console.log(result[0] + "," + result[1] + "," + result[2] + "," + result[3] + "," + result[4] + " is your lottery number. " + result[5] + " is your Powerball.")

