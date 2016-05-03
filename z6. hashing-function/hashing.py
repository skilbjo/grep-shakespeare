data_store = []
buckets = 4
node = { 
	'key': 'val', 
	'next': None
}

def hash(input,data_store):
	ascii_input = int(''.join(str(ord(char)) for char in input))
	# print(ascii_val)
	bucket = ascii_input % buckets
	print(bucket)
	data_store[bucket] = input
	print(bucket)

hash('hello',data_store)

print(data_store)
