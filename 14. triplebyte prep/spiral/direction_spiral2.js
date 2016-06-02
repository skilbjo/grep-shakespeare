var mark = '*',
	arr = [
	['','','',''],
	['','','',''],	
	['','','',''],
	['','','','']	
];

var draw_at_position = function(row,col){
	arr[row][col] = mark;
	return;
};

var draw_line = function(start,len,direction){
	var current = start;

	switch(updown){
		case 'L': 	
			for(var i = 0; i<= len; i++){
				draw_at_position(start[0],i);
			}
			break;
	}




	// while(current[0] <= end[0] && current[1] <== end[1]){
	// 	draw_at_position()
	// }
	// right
	for(var i=0;i<=len;i++){
		draw_at_position(0,i);
	}
	// down
	// for(var i=0;i<=len;i++){
	// 	draw_at_position(i,3);
	// }	
	// // left
	// for(var i=0;i<=len;i++){
	// 	draw_at_position(3,i);
	// }		
	// // up
	// for(var i=0;i<=len;i++){
	// 	draw_at_position(3,i);
	// }			
};

draw_line( [0,0], arr.length-1, [0,arr.length-1]);

// draw_line(arr.length-1,'right');

console.log(
	arr
);


