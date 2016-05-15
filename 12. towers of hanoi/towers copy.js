var config = {
	pieces: 3,
	columns: 3
}


var moveNPieces = function(n, from, to, via){
	if( n === 1 ){
		move(from,to);
	} else {
		moveNPieces(n - 1, from, via, to);
		move(from, to);
		moveNPieces(n - 1, via, to, from);
	}

};

movePieces(n,0,2,1)
