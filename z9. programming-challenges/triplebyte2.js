var lngst_plndrmic_substring = function(str) {
	var chck_plndrme = function(string){
		for(var i=0; i< Math.floor(string.length/2); i++){
			if(string[i] != string[string.length - 1 - i]){
				return false;
			}
		}
		return true;
	};

	str = str.split('');

	var attempt = '',
		plndrme_length = 0;

	str.map(function(char,iterator){
		attempt+=char;
		if( chck_plndrme(attempt) ){
			plndrme_length+=1;
		}
	});

	return plndrme_length;

};

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