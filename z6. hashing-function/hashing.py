data_store = []
buckets = 4
node = { 
	'key': 'val', 
	'next': None
}

# Initialize data store
data_store = [ [] for bucket in range(buckets)]


def fn_bucket(input):
	ascii_val = int(''.join(str(ord(char)) for char in input))
	return ascii_val % buckets

def hash(input,data_store):
	bucket = fn_bucket(input)
	return data_store[bucket].append({
		'key': input
	})
	bucket = ascii_input % buckets
	print(bucket)
	data_store[bucket] = input
	print(bucket)

hash('hello',data_store)
hash('hello0',data_store)

def hash_lookup(target,data_store):
	bucket = fn_bucket(target)
	val = data_store[bucket]
	return val

print(data_store)

print(hash_lookup('hello',data_store))