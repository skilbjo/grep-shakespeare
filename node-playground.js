var iterative_fib_arr = function(n){
	// var arr = new Array(n);
	var arr = Array.apply(null, Array(n));
	return arr.reduce(function(prev,cur,iterator){
		if(iterator - 2 <= 0) return 0;
		return prev + (iterator - 2) + (iterator - 1);
	},0);
};

console.log(
	iterative_fib_arr(7)
);