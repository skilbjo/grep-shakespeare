var longest_palindromic_substring = function(str) {
	var check_palindrome = function(string){
		for(var i=0; i< Math.floor(string.length/2); i++){
			if(string[i] != string[string.length - 1 - i]){
				return false;
			}
		}
		return true;
	};

	str = str.split('');

	var attempt = '',
		palindrome_length = 0;

	str.map(function(char,iterator){
		attempt+=char;
		if( check_palindrome(attempt) ){
			palindrome_length+=1;
		}
	});

	return palindrome_length;

};

var testInput1 = longest_palindromic_substring('abba'),
	testInput2 = longest_palindromic_substring('bobcat'),
	testInput3 = longest_palindromic_substring('acyclic')
	;



console.log(testInput1);
console.log(testInput1 == 4);


console.log(testInput2);
console.log(testInput2 == 3);

console.log(testInput3);
console.log(testInput3 == 3);