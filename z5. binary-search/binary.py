'''
Binary Search Algorithm
https://en.wikipedia.org/wiki/Binary_search_algorithm
runtime: O(log n)
constraint: list must be sorted
'''
data_store = [ 1, 2, 3 ]
large_data_store = [n for n in range(1000)]

def binarySearch(item,data_store):
	first = 0
	last = len(data_store) - 1
	found = False

	while first <= last and not found:
		midpoint = (first+last)/2
		if data_store[midpoint] == item:
			found = True
		else:
			if item < data_store[midpoint]:
				last = midpoint - 1
			else:
				first = midpoint + 1
	return found

print( binarySearch( 67 , large_data_store) )


