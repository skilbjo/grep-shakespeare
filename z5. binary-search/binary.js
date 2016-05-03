
var data_store = [ 1, 2, 3 ],
	unordered = [ 67, 324, 123, 1, 3 ]
	;


var binarySearch = function(item,data_store) {
	var first = 0,
		last = data_store.length - 1,
		found = false
		;

	while (first <= last && !found){
		var midpoint = (first+last)/2;
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
binarySearch( 67 , unordered)
);


