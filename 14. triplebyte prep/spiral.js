var n = 5,
	symbol = '#',
	output = 
[ [ ''	, '#'	, ''	, ''	, '' ],
  [ '#'	, ''	, ''	, ''	, '' ],
  [ '#'	, ''	, '#'	, ''	, '' ],
  [ '#'	, ''	, ''	, '#'	, '' ],
  [ ''	, '#'	, '#'	, ''	, '' ] ],
  coordinates = [ [0,1], [1,0] , [2,0], [3,0], [4,1], [4,2] ]
	;

var spiral = function(n){
	var result = []
		center = n%2 != 0 ? (n+1) / 2 : n/2;

	console.log(center); 

	for(var row = 1; row <= n; row++){
		var record = [];
		for(var field = 1; field <= n; field++){
			if(row == center && field == center){
				record.push(symbol)
			} else {
				record.push('')
			}
		}
		result.push(record);
	}

	return result;
};


console.log(
	spiral(n)
);


