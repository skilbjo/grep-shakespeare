// Recursive

var recursive_fib = function(n){
	if(n<=1) return n;
	return recursive_fib(n-2) + recursive_fib(n-1);
};

var recursive_memo_fib1 = (function(){
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

var recursive_memo_fib2 = function(n,cache){
	if(cache[n]) {
		return cache[n];
	} else {
		cache[n] = recursive_memo_fib(n-2) + recursive_memo_fib(n-1);	
		if(n<=2) return n;
		return;
	}
};

var iterative_fib = function(n){
	var first = 0, second = 1, fib = 1;
	for(var i=2; i<=n;i++){
		fib = first + second;
		first = second;
		second = fib;
	}
	return fib;
};

console.log(
	'Recursive: ',recursive_fib(7)+'\n'+
	'1st Memoization Recursive: ',recursive_memo_fib1(7)+'\n'+
	'2nd Memoization Recursive: ',recursive_memo_fib1(7)+'\n'+	
	'Iterative: ',iterative_fib(7)
);




