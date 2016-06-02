var mark = '*',
// 	arr = [
// 	['','','',''],
// 	['','','',''],	
// 	['','','',''],
// 	['','','','']	
// ];
	arr = [
	['','','','','','',''],
	['','','','','','',''],	
	['','','','','','',''],
	['','','','','','',''],	
	['','','','','','',''],	
	['','','','','','',''],	
	['','','','','','',''],			
];

var draw_at_position = function(row,col){
	arr[row][col] = mark;
	return;
};

var draw_line = function(start,len,dir){
	var position = start;
	switch(dir){
		case 'L': for(var col = start[1]; col >= (start[1] - len +1); col--){
			draw_at_position(start[0],col);
			position = [start[0],col];
			} break;
		case 'R': for(var col = start[1]; col <= (len); col++){
				draw_at_position(start[0],col);
				position = [start[0],col];
			} break;
		case 'U': for(var row = start[0]; row >= (start[0] - len +1); row--){
			draw_at_position(row,start[1]);
			position = [row,start[1]];
			} break;
		case 'D': for(var row = start[0]; row <= (len); row++){
				draw_at_position(row,start[1]);
				position = [row,start[1]];
			} break;				
	}
	return position;
};

var spiral = function(n){
	var counter = n - 1;
	var next = draw_line([0,0],arr.length-1,'R'),
		order = ['R','U','L','D'],
		directions = [];

	for(var i = 0; i<= counter; i++){
		var tmp = '';
		tmp = order.pop();
		directions.unshift(tmp);
		order.unshift(tmp);
	}

	while(counter >= 0){
		// console.log(arr);
		next = draw_line( next , counter, directions.pop() );
		counter--;
	}
	draw_line( next , counter+2, directions.pop() );	

};

spiral(7);

// var start = draw_line([0,0], arr.length - 1, 'R');
// draw_line(start, arr.length-1, 'D');
// draw_line([0,arr.length-1], arr.length-1, 'D');


// console.log(
// start
// 	);
// console.log(
// 	draw_line([1,1], 1, 'U')
// );

console.log(
	arr
);


