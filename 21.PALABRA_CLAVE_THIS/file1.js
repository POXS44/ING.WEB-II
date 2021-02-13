

let o = {
    carId: 123,
    getId: function(){
	 return this.carId;
    } 
};


console.log( o.getId()); // 123
