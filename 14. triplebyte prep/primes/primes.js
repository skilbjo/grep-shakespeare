var range = [25,25],
	start = range[0],
	end = range[1]
	;

var check_prime = function(num, j, cb){
	if(j === 1) {
		cb(true); return;
	}

	if(num % j === 0) {
		cb(false); return;//return false;
	}

	return check_prime(num, j-1, cb);
};

var primes = function(start,end){
	var result = {};
	if(!start || !end || start*1 < 0 || end*1 < 0){
		return 'Bad inputs! Provide an an integer for start and end positions.';
	}

	for(var i = start; i <= end; i++){
		for(var j = 3; j <= (i - 1); j++){
			check_prime(i,j, function(ans){
				// console.log(i,j,ans);
				if( ans ){
					result[i] = 'prime';
				}	
			});
			// while( check_prime(i,j)  ){
			// 	console.log(i, j);
			// }
			// console.log( i, j,check_prime(i,j) );
			// if( check_prime(i,j) ){
			// 	result[i] = 'prime';
			// }	
		}
	}

	return result;
};


console.log(
	// check_prime(25,25)
	primes(start, end)
);

// [4,5]
// [2,3,4]
