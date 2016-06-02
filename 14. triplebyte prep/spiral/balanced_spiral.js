var arr = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
];

var coordinates = [];

var rotate = function(p_arr){
	var result = [];

	for(var col = p_arr[0].length - 1; col >= 0; col--){
		var line = [];
		for(var row=0; row <= p_arr.length - 1; row++){
			line.push(p_arr[row][col]);
		}
		result.push(line);
	}
	return result;
};


var trace_arr = function(arr){
	var result = [];

	while(arr[0].length >= 2){
		result.push(arr[0]);
		arr.shift();
		arr = rotate(arr);
	}

	result.push(arr[0]);
	arr.shift();
	arr = rotate(arr);		
	result.push(arr[0]);

	return result;
};

console.log(
	trace_arr(arr)
);





