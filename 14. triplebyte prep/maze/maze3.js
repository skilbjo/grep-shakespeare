var maze = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
		[1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
		[0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
		[0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
		[0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
		[0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
],
copy = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
		[1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
		[0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
		[0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
		[0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
		[0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
;

var traverse = function(column,row){
	copy[column][row] = 'X';
	console.log(
		copy
		);
	if( maze[column][row] === 2){
		return `Maze solved @: ${column},${row}`;
	} else {
		maze[column][row] = 9;
		if(row < maze[column].length-1){
			return traverse(column,row+1);
		}

		if(column < maze.length-1){
			return traverse(column+1,row);
		}

		if(column>0){
			return traverse(column-1,row);
		}
		if(row>0){
			return traverse(column,row-1);
		}
	}
};

// var solve = function(maze){
// 	traverse(1,1);
// };

console.log(
	traverse(9,0)
	// traverse(2,2)
	);




