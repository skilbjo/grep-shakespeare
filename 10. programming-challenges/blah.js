var lngst_plndrmic_substring = function(str){
	var is_palendrome = function(string){
		for ( var i=0; i <= Math.floor(string.length - 1); i++){
			if(string[i] != string[string.length - 1 -i]){
				return false;
			}
		}
		return true;
	};

	str = str.split('');

	var attempt = '', 
		result = 0;

	str.forEach(function(char){
		attempt+=char;
		if ( is_palendrome(attempt) ) {
			result+=1;
		}
	});
	return result;
};

var blah = 'abaa';


var testInput1 = lngst_plndrmic_substring('abba'),
	testInput2 = lngst_plndrmic_substring('bobcat'),
	testInput3 = lngst_plndrmic_substring('acyclic')
	;



console.log(testInput1);
console.log(testInput1 == 4);


console.log(testInput2);
console.log(testInput2 == 3);

console.log(testInput3);
console.log(testInput3 == 3);