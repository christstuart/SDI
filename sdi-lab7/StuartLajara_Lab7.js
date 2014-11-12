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

