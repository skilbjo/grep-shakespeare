var n = 4,
	symbol = '#',
	matrix = 
[ [ ''	, ''	, '' , '' ],
  [ ''	, ''	, '' , '' ],
  [ ''	, ''	, '' , '' ],
  [ ''	, ''	, '' , '' ] ]
	;

/*
row[0][field=all] = '#'
row[1][field=4] = '#'
*/

var spiral = function(n){
	for (var row= 0; row <= (n - 1); row++){
		for (var field = 0; field <= (n - 1); field++){
			if(row === 0){
				matrix[row][field] = symbol;
			}
			if(row === 1||2){
				matrix[row][n-1] = symbol;
			}
			if(row === (n-1)){
				matrix[row][field] = symbol;
			}
			console.log(matrix);
		}
	}
};

console.log(
	spiral(n)
);


