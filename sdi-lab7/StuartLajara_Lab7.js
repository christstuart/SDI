var appleProduct;
var appleProduct1;
var appleProduct2;
var appleProduct3;

var appleConstruction = function(proMake, proModel, proYear, proOs) {
		
		this.make  = proMake;
		this.model = proModel;
		this.year  = proYear;
		this.os    = proOs;
		this.newOs = function (newOs) {
			 this.os = newOs;
		}
};

var appleCreation = function() {
	
appleProduct = new appleConstruction(
appleData.products.make, 
appleData.products.model, 
appleData.products.year, 
appleData.products.os)

} 
var appleProductFunction = function() {
	
	for (var element in appleData.products) {
			if (element == 0) {
			  appleProduct = new appleConstruction (
					appleData.products[0].make, 
					appleData.products[0].model, 
					appleData.products[0].year, 
					appleData.products[0].os); 
				
			} else if (element == 1) {
				appleProduct1 = new appleConstruction (
					appleData.products[1].make, 
					appleData.products[1].model, 
					appleData.products[1].year, 
					appleData.products[1].os);
			} else if (element == 2) {
				appleProduct2 = new appleConstruction (
					appleData.products[2].make, 
					appleData.products[2].model, 
					appleData.products[2].year, 
					appleData.products[2].os);
			}  else {
				appleProduct3 = new appleConstruction (
					appleData.products[3].make, 
					appleData.products[3].model, 
					appleData.products[3].year, 
					appleData.products[3].os);
			}
			
		}
	
};	

appleProductFunction();
console.log(appleProduct.make + " is the creator of the " + appleProduct.model + "." + " It came out the year " + appleProduct.year + "." + " It's running " + appleProduct.os + ".");
console.log(appleProduct1.make + " is the creator of the " + appleProduct1.model + "." + " It came out the year " + appleProduct1.year + "." + " It's running " + appleProduct1.os + ".");
console.log(appleProduct2.make + " is the creator of the " + appleProduct2.model + "." + " It came out the year " + appleProduct2.year + "." + " It's running " + appleProduct2.os + ".");
console.log(appleProduct3.make + " is the creator of the " + appleProduct3.model + "." + " It came out the year " + appleProduct3.year + "." + " It's running " + appleProduct3.os + ".");
appleProduct.newOs("iOS 9");
console.log(appleProduct.make + " is the creator of the " + appleProduct.model + "." + " It came out the year " + appleProduct.year + "." + " It's running " + appleProduct.os);


