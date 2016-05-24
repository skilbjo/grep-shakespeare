var mark = '*',
	n = 8,
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
		next = draw_line( next , counter, directions.pop() );
		counter--;
	}
	draw_line( next , counter+2, directions.pop() );	
};


var f = function(n){
	console.log('function f called with parameter: ',n);
	console.log('answer:');
	spiral(n);
	console.log(textify());
};

f(n);



