var nearest_power_of_two = function(n) {
	var nearest = 2;

	for(var i = 2; i <= n; i++){
		if ( Math.pow(2,i) >= n ) {
			return nearest;
		} else {
			nearest = Math.pow(2,i);
		}
	}
};

var testInput1 = nearest_power_of_two(10)
	,testInput2 = nearest_power_of_two(2)
	,testInput3 = nearest_power_of_two(100)
	;



console.log(testInput1,testInput1 == 8);
console.log(testInput2, testInput2 == 2);
console.log(testInput3, testInput3 == 64);
