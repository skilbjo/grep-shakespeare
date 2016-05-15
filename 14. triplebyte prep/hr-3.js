// write a function that takes 3 words and returns a single count of all their letters
var arr = ['fuck','you','bro'],
	panda = ['panda','panda','littlepanda']
	;

var word_count = function(arr){
	return arr.reduce(function(prev,cur){
		return prev + cur.length;
	},0);
};

console.log(
	word_count(panda)
);
