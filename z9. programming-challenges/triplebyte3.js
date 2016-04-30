var longest_flat = function(arr) {
	var series = 1, longest = 0;

	arr.map(function(num,iterator){
		if(iterator+1 == arr.length){
			return;
		}

		if(num == arr[iterator+1]){
			series+=1;
		}

		if(num != arr[iterator+1]){
			series=1;
		}

		if (series > longest){
			longest=series;
		}
	});
	return longest;
};

var testInput1 = longest_flat([1,1,1]),
	testInput2 = longest_flat([1,1,2,2,2]),
	testInput3 = longest_flat([1,1,2,2,2,2])
	;



console.log(testInput1);
console.log(testInput1 == 3);


console.log(testInput2);
console.log(testInput2 == 3);


console.log(testInput3);
console.log(testInput3 == 4);