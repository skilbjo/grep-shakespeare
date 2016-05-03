var interleave = function(str1, str2) {
	str1 = str1.split(''), str2 = str2.split('');

	var result = [];

	str1.map(function(char,interator){
		result.push(char);
		result.push(str2[interator]);
	});

	return result.join('');
};

var testInput1 = interleave('123','abc'),
	testInput2 = interleave('4567','d')
	;



console.log(testInput1);
console.log(testInput1 == '1a2b3c');


console.log(testInput2);
console.log(testInput2 == '4d567');