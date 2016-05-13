var 
	prompt = require('prompt'),
	colors = require('colors/safe'),
	matrix = [],
	o = 'o',
	x = 'x',
	round = 0
	;

// https://docs.nodejitsu.com/articles/REPL/how-to-create-a-custom-repl/

// initialize the matrix
for (var i = 0; i <= 2; i++){
	matrix.push([]);
	for (var j = 0; j <= 2; j++){
		matrix[i].push('');
	}
}

var placeMark = function(coordinates,mark){
	var row = coordinates[0],
		col = coordinates[1];

	matrix[row][col] = mark;

	return;
};

var turn = function(coordinates,round){
	var player = round % 2 ? x : o,
		row = coordinates[0],
		col = coordinates[1]
		;

	if(matrix[row][col] !== '') {
		return 'try again! space already taken';
	}

	round+=1;

	switch(player){
		case 'x':
			placeMark(coordinates,'x'); break;
		case 'o':
			placeMark(coordinates,'x'); break;
	}

};

prompt.message = colors.rainbow('Input: ');
prompt.start();

prompt.get(['coordinates'],function(err,result){
	if(err) return err;

	console.log(colors.rainbow('You got: ') + result.coordinates);	
});

prompt.get(['coordinates'],function(err,result){
	if(err) return err;

	console.log(colors.rainbow('You got: ') + result.coordinates);	
});

// console.log(
// 	turn([0,1],round)
// );

// console.log(
// 	turn([1,1],round)
// );

// console.log(
// 	matrix
// );


