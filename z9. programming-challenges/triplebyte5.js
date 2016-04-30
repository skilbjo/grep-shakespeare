var calc = function(expression,input,target){
	if(input.length == 1){
		if( new Function('return '+expression+input)() == target ){
			console.log(expression+input+' = '+target);
		}
	} else {
		for(var i = 1; i <= input.length; i++){
			var current = input.substring(0,i),
				remaining = input.substring(i);
			['+','-','/','*'].map(function(operator){
				calc(expression + current + operator, remaining, target);
			});
		}
	}
};

var f = function(sequence, target){
	calc('',sequence,target);
};

var testInput1 = f('314159265358',27182)
	;

console.log(testInput1);