# hashing-function

Hashing function is an efficient data storing algorithm.

Searching (in computers) is typically a O(n) problem, meaning to search for something, you need to check each item.

The runtime of the algorithm is dependent on the size of the data store.

However, using a hashing function, you can potentially return the runtime to constant time, meaning instantaneously. 

		inefficient_data_store = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

		buckets = [0, 1]

		def hash(collection):
			collection.map(lambda number: number % 2)

		efficient_data_store = [ 	
		 [		 ],[ 	   ]
				0, 			1,
				2, 			3,
				4, 			5,
				6, 			7,
				8,			9
			]

		def inefficient_lookup(target,inefficient_data_store):
			list.map(lambda item: item == target)
			# returns result in O(n)

		def efficient_lookup(target,efficient_data_store):
			bucket = hash_lookup(target)
			efficient_data_store[bucket][lambda item: item == target]
			# returns result in constant time, worst case O(n)
