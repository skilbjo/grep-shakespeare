// Recursive
var recursive_fib = function(n){
	if(n<=1) return n;
	return recursive_fib(n-2) + recursive_fib(n-1);
};

// Recursive w/ memoization (caching)
var recursive_memo_fib = function(n){
	return f_recursive_memo_fib(n,{0:0,1:1,2:1})[n];
};

var f_recursive_memo_fib = function(n,cache){
	if( cache[n] ) {
		return cache[n];
	} else {
		if(n<=2) return cache[n];
		// var left 	= n - 1 	>= 3 ? recursive_memo_fib(n-1,cache)[n-1] : recursive_memo_fib(n-1,cache);
		// var right = recursive_memo_fib(n-2,cache);
		// console.log('n - 2 is:',n-2,'left: ',right);	
		// cache[n] = left+right;
		cache[n] = ( (n-1>=3 ? f_recursive_memo_fib(n-1,cache)[n-1] : f_recursive_memo_fib(n-1,cache) ) + // 3 => 2
								f_recursive_memo_fib(n-2,cache) 	// 2 => 1  ==> 3
		);
		return cache;
	}
};

console.log(
	recursive_memo_fib(7)
);


var recursive_memo_fib_take1 = (function(){
	var memo = [0,1];
	var fib = function(n){
		var result = memo[n];
		if (typeof result !== 'number'){
			result = fib(n-1) + fib(n-2);
		}
		return result;
	};
	return fib;
}());

var iterative_fib = function(n){
	var fib = 0;
	for(var i=2; i<=n;i++){
		fib = (i-2) + (i-1);
	}
	return fib;
};

var iterative_fib_arr = function(n){
	var arr = Array.apply(null, Array(n));
	return arr.reduce(function(prev,cur,iterator){
		if(iterator - 2 <= 0) return 0;
		return prev + (iterator - 2) + (iterator - 1);
	},0);
};

// console.log(
// 	iterative_fib_arr(7)
// );

// console.log(
// 	'Recursive: ',recursive_fib(7)+'\n'+
// 	'1st Memoization Recursive: ',recursive_memo_fib(7,{0:0,1:1,2:2})+'\n'+
// 	'2nd Memoization Recursive: ',recursive_memo_fib_take1(7)+'\n'+	
// 	'Iterative: ',iterative_fib(7)
// );




