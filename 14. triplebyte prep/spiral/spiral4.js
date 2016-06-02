var mark = '*',
	n = 7,
	create_arr = function(n){
		var arr = [];
		for(var row=0; row < n; row++){
			var line = [];
			for(var field=0; field < n; field++){
				line.push(' ');
			}
			arr.push(line);
		}
		return arr;
	},
	arr = create_arr(n),
	textify = function(){
	var result = '';
	for(var row=0; row<= arr.length-1; row++){
		for(var col=0; col<= arr.length-1; col++){
			result+=arr[row][col];
		}
		result+='\n';
	}
	return result;
};

var draw_at_position = function(row,col){
	arr[row][col] = mark;
	return;
};

var draw_line = function(start,len,dir){
	var position = start;
	switch(dir){
		case 'L': for(var col = start[1]; col >= (start[0] - len); col--){
			draw_at_position(start[0],col);
			position = [start[0]-1,col];
			} break; // col = 2; col <= 6 (col = 4)
		case 'R': for(var col = start[1]; col <= (len + start[1]); col++){
				draw_at_position(start[0],col);
				position = [start[0],col];
			} break;
		case 'U': for(var row = start[0]; row >= (start[0] - len + 1); row--){
			draw_at_position(row,start[1]);
			position = [row,start[1]];
			} break;
		case 'D': for(var row = start[0]; row <= (start[0] + len); row++){
				draw_at_position(row,start[1]);
				position = [row,start[1]];
			} break;				
	}
	return position;
};

var spiral = function(n){
	var next = draw_line([0,0],arr.length-1,'R'),
		order = ['R','U','L','D'],
		directions = [];

	for(var j = 0; j <= n-1; j++){
		var tmp = '';
		tmp = order.pop();
		directions.unshift(tmp);
		order.unshift(tmp);
	}

	for(var i = n - 1; i >= 0; i--){
		var direction = directions.pop();
		next = draw_line( next , i, direction );
	}
};


var f = function(n){
	console.log('function f called with parameter: ',n);
	console.log('answer:');
	spiral(n);
	console.log(arr);
	console.log(textify());
};

f(n);



