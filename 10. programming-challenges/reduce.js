/* 
	write an reduce function without using reduce
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/
var arr = [1,2,3]
	;

var example = function(arr){
	return arr.reduce(function(prev,cur){
		return prev + cur;
	},0)
};

var reduce_fn = function(prev,curr,index,arr){

};

var reducer = function(fn,base){
	// fn()
};

console.log(
	example(arr)
);
