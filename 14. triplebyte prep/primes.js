var range = [4,5],
	start = range[0],
	end = range[1]
	;

var primes = function(start,end){
	if(!start || !end || start*1 < 0 || end*1 < 0){
		return 'Bad inputs! Provide an an integer for start and end positions.';
	}
	var result = {}; // [];

	for(var i = start; i <= end; i++){
		for(var j = 2; j < i; j++){
			if( ((i % j !== 0)) ){
				if( /* check the 2 and 4 example */ ){ // while or if??
					result[i] = 'prime';
				}
			}
		}
	}

	return result;
};



console.log(
	primes(start, end)
);

[4,5]
[2,3,4]
