/*
	given a string, write the combination sequences of single or many integers that equal the target sum
*/

var numbers = '111',
	sum = 12
	;

var calc = function(curr,rest,target){
	if(curr*1 + rest*1 === target){
		console.log([curr, rest]);
	}

	while(rest){
		curr	+= 	rest.slice(0,1);
		rest	=		rest.slice(1);
		calc(curr, rest, target);
	}
};


// console.log(
	calc('',numbers,sum);
// );
