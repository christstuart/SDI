var numbers  = 3;
var numbers1 = 5;
var done;
var result;


var myNumbers = function(num, num1) {
	
	sum = 0;
	
	for (var i = 0; i < 1000; i++) {
		if (i%num == 0 || i%num1 == 0) {
			sum = sum + i
		}
		
	}
	return sum
};

done = myNumbers(numbers, numbers1);
console.log(done + " is the sum of all the factors of 3 and 5");

