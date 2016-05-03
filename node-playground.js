var input = 'hello';

var charcode = function(str){
	return str.split('').map(function(char){
		return char.charCodeAt();
	}).reduce(function(prev,cur){
		return prev+cur;
	});
};

// console.log(
// 	charcode.apply(String,input)
// 	);

console.log(
	charcode(input)
	);


// console.log(
// 	'hi'.charCodeAt(1)
// 	);