/*
Binary Search Algorithm
https://en.wikipedia.org/wiki/Binary_search_algorithm
time-complexity: O(log n)
constraint: list must be sorted
*/

var data_store = [ 1, 2, 3 ],
	large_data_store = []
	;

for(var i = 1; i< 1000; i++){
	large_data_store.push(i);
}

var binarySearch = function(item,data_store) {
	var first = 0,
		last = data_store.length - 1,
		found = false
		;

	while (first <= last && !found){
		var midpoint = (first+last)/2 | 0;
		if (data_store[midpoint] == item) { found = true; }
		else {
			if (item < data_store[midpoint]) {
				last = midpoint - 1;
			} else {
				first = midpoint + 1;
			}
		}
	}
	return found;
};

console.log(
	binarySearch( 670 , large_data_store)
);


