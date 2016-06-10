var range = [1,20],
	start = range[0],
	end = range[1]
	;

var check_prime = function(num, j, ans){
	if(j === 1) return ans;

	if(num % j === 0) {
		ans.push(false);
	}

	ans.push(true);

	return check_prime(num, j-1, ans);
};

var primes = function(start,end){
	var result = {};
	if(!start || !end || start*1 < 0 || end*1 < 0){
		return 'Bad inputs! Provide an an integer for start and end positions.';
	}

	for(var i = start; i <= end; i++){
		var tmp = [];
		for(var j = 3; j <= (i - 1); j++){
			tmp = check_prime(i,j,[]);
		}
		if( tmp.every(function(el){ return el === true; }) ){
			result[i] = 'prime';
		}
	}

	return result;
};


console.log(
	primes(start, end)
);
