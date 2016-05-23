// Recursive => Funcational, yay! But dat runtime doe.. :(
var recursive_fib = function(n){
	if(n<=1) return n;
	return recursive_fib(n-2) + recursive_fib(n-1);
};

// Recursive w/ memoization (caching) => Funcational + performant!
var recursive_memo_fib = function(n){
	var f = function(n,cache){
		if( cache[n] ) {
			return cache[n];
		} else {
			if(n<=2) return cache[n];
			cache[n] = ( (n-1>=3 ? f(n-1,cache)[n-1] : f(n-1,cache) ) +
									f(n-2,cache)
			);
			return cache;
		}
	};
	return f(n,{0:0,1:1,2:1})[n];
};

// Iterative => Boring !
var iterative_fib = function(n){
	var fib = 1, current = 0, prev = 1;
	for(var i=2; i<=n;i++){
		fib = prev + current;
		current = prev;
		prev = fib;
	}
	return fib;
};

var n = 34;

var hrstart_recursive_fib = process.hrtime();
recursive_fib(n);
var hrend_recursive_fib = process.hrtime(hrstart_recursive_fib);

var hrstart_recursive_memo_fib = process.hrtime();
recursive_memo_fib(n);
var hrend_recursive_memo_fib = process.hrtime(hrstart_recursive_memo_fib);

var hrstart_iterative_fib = process.hrtime();
iterative_fib(n);
var hrend_iterative_fib = process.hrtime(hrstart_iterative_fib);

console.info('Recursive: %d ms', hrend_recursive_fib[1]/1000000);
console.info('Memoization: %d ms', hrend_recursive_memo_fib[1]/1000000);
console.info('Iterative: %d ms', hrend_iterative_fib[1]/1000000);



// console.info('Recursive: %ds %d ms', hrend_recursive_fib[0],Math.round(hrend_recursive_fib[1]/1000000,2));
// console.info('Memoization: %ds %d ms', hrend_recursive_memo_fib[0],Math.round(hrend_recursive_memo_fib[1]/1000000,2));
// console.info('Iterative: %ds %d ms', hrend_iterative_fib[0],Math.round(hrend_iterative_fib[1]/1000000,2));


// console.log(
// 	'Recursive: ',recursive_fib(20)+'\n'+
// 	'Memoization Recursive: ',recursive_memo_fib(20)+'\n'+
// 	'Iterative: ',iterative_fib(20)
// );




