var numbers = "123456789",
	sum = 10
	;

var calc = function(expression,a,k){
	if(a.length === 1){
		console.log(new Function('return '+expression+a[0])() );
		if( (new Function('return '+expression+a[0])()) === k ){
			// console.log(k);
			console.log('return ',expression,a[0],'=',k);
		}
	} else {
		var current = a[0],
			rest = a.slice(1);

		['+'].map(function(op){
			calc(expression+current+op,rest,k);
		});
	}
};

var numberOfPairs = function(a,k){
	a = a.split('').map(function(num){
		return num*1;
	});

	calc('',a,k);
};


// console.log(
	numberOfPairs(numbers,sum);
		// );

