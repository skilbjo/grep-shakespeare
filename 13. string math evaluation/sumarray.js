/*
	given a string, write the combination sequences of single integers that equal the target sum
*/

var numbers = "11162542",
	sum = 10
	;

var sumfromarray = function(str,target){
	var result = [];
	arr = str.split('').map(function(num){
		return num*1;
	});

	for (var i=0; i <= arr.length - 1; i++){
		for(var j=0; j <= arr.length - 1; j++){
			if (arr[i] + arr[j] === target){
				result.push([arr[i],arr[j]]);
			} 
		}
	}

	return result;
};


console.log(
	sumfromarray(numbers,sum)
);
