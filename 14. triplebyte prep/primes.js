var range = [5,9],
	start = range[0],
	end = range[1]
	;

var primes = function(start,end){
	if(!start || !end || start*1 < 0 || end*1 < 0){
		return 'Bad inputs! Provide an an integer for start and end positions.';
	}
	var result = [];

	for(var i = start; i <= end; i++){
		for(var j = 2; j < i; j++){
			if( !(i % j === 0)){
				result.push(i);
			}
		}
	}

	return result;
};



console.log(
	primes(start, end)
);
