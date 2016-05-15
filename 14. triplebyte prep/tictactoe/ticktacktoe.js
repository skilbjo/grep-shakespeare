var 
	prompt = require('prompt'),
	matrix = [],
	o = 'o',
	x = 'x',
	round = 0
	;

// initialize the matrix
for (var i = 0; i <= 2; i++){
	matrix.push([]);
	for (var j = 0; j <= 2; j++){
		matrix[i].push('');
	}
}

var checkWin = function(){
	// row win
	for(var row = 0; row<=2; row++){
		if( matrix[row][0] == matrix[row][1] && matrix[row][0] == matrix[row][2] && matrix[row][0] !== '' ){
			return true;
		}
	}

	// col win
	for(var col = 0; col<=2; col++){
		if( matrix[0][col] == matrix[1][col] && matrix[0][col] == matrix[2][col] && matrix[0][col] !== '' ){
			return true;
		}
	}

	// diagonal forward (\) win
	if( matrix[0][0] == matrix[1][1] && matrix[0][0] == matrix[2][2] && matrix[0][0] !== '' ){
		return true;
	}

	// diagonal backward (/) win
	if( matrix[0][2] == matrix[1][1] && matrix[0][0] == matrix[2][0] && matrix[0][2] !== '' ){
		return true;
	}
	return false;
};

var placeMark = function(coordinates,mark){
	var row = coordinates[0],
		col = coordinates[1];

	if(matrix[row][col] !== '') {
		console.log('Try again! Space already taken!'); return;
	}
	round+=1;
	matrix[row][col] = mark; return;
};

var turn = function(coordinates,round){
	var player = round % 2 === 0 ? x : o;
	placeMark(coordinates,player);
};

var getInput = function(){
	prompt.get(['coordinates'],function(err,result){

		if(err) return err;
		if(result.coordinates == 'quit') return;

		result.coordinates = result.coordinates.split(',');

		turn(result.coordinates,round);

		console.log(JSON.stringify(matrix[0],null,''));
		console.log(JSON.stringify(matrix[1],null,''));
		console.log(JSON.stringify(matrix[2],null,''));

		if( checkWin() ){
			console.log('Game over! Player "'+((round-1)%2===0?'X':'O')+'" wins!');
		} else {
			console.log('Round is: ',round);
			console.log('Player is: ',round % 2 === 0 ? 'x': 'o');
			getInput();
		}
	});
};

console.log(JSON.stringify(matrix[0],null,''));
console.log(JSON.stringify(matrix[1],null,''));
console.log(JSON.stringify(matrix[2],null,''));
prompt.message =('Enter coordinates [row,col] as row,col: ');
prompt.start();
getInput();


