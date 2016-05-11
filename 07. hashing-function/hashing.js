/*
Hash Tables
https://en.wikipedia.org/wiki/Hash_table
time-complexity: O(1)
*/
var data_store = [ ],
	buckets = 4
	;

// initialize hash table =>
for(var i=0;i<buckets;i++){
	data_store[i] = [];
}

// get bucket value
var fn_bucket = function(str){
	var ascii_val = str.split('').map(function(char){
		return char.charCodeAt();
	}).reduce(function(prev,cur){
		return prev+cur;
	});
	return ascii_val % buckets;
};

// set value inside hash table =>
var hash = function(input, data_store){
	var bucket = fn_bucket(input);
	return data_store[bucket].push({
		'key': input
	});
};

hash('hello0',data_store);
hash('hello2',data_store);

// console.log(data_store);

// lookup from hash table =>
var hash_lookup = function(target, data_store){
	var bucket = fn_bucket(target)
		, val = data_store[bucket];

	return val;
};

console.log(
hash_lookup('hello0',data_store)
);

console.log(
	data_store
	);


















	// for(var key in data_store[bucket]){
	// 	if(data_store[bucket].hasOwnProperty(key){ // key:key, data_store[bucket][key]:value
			
	// 	});
	// }

	// data_store[bucket].map(function(node,iterator){

	// });
	// while(next.value){
	// 	if(key == target)
	// 		return 
	// }


