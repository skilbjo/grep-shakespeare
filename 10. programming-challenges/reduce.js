/* 
	write an reduce function without using reduce
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
	https://github.com/timoxley/functional-javascript-workshop/blob/b555f2d8cf2f8d6f08e73f456a64d2a1a739f4cc/exercises/basic_recursion/problem.md
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
