// You are given an array containing N integers in the range 1..N.
// One is missing, the other is duplicated. The array is not sorted.  Write a function that returns the duplicated integer.
// findDupe([5,4,2,4,1]) -> 4


var arr = [5,4,4,3,9,1];


var findDupe = function(arr){
	arr.sort();

	for(var index in arr){
		if(index+1 > arr.length){
			return;
		} else {
			if(arr[index+1] == arr[index]){

				return arr[index];
			}
		}
		// if()
	}

	// return arr.filter(function(num,iterator){
	// 	if (iterator+1 == arr.length){
	// 		return;
	// 	} else {
	// 		if( arr[iterator+1] == num) {
	// 			return num;
	// 		}
	// 	}
	// });
	
	// arr.forEach(function(num,iterator){
	// 	if (iterator+1 == arr.length){
	// 		return;
	// 	} else {
	// 		if( arr[iterator+1] == num) {
	// 			result.push(num);
	// 			return num;
	// 		}
	// 	}
	// });

	// return result;
};

var buildOccurances = function(arr) {
		var result = {};
		arr.map(function(item){
				if(!result[item]) {
						result[item] = 1;
				} else {
						result[item]+=1;
				}
		});

		return result;
};

/*
{
		5: 1,
		4: 2
}
*/

var findDuplicates = function(data){
		var result = [];
		for (var key in data){
				if (data.hasOwnProperty(key)){
						if( (data[key]) >= 2){
								result.push(key);
								// return key;
						}
				}
		}
		return result;
};

var findDupe2 = function(arr){
		return findDuplicates(buildOccurances(arr));
};

console.log(
		findDupe(arr)
);