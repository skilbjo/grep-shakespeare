
data_store = [ 1, 2, 3 ]
unordered = [ 67, 324, 123, 1, 3 ]


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

print(
binarySearch( 67 , unordered)
)


