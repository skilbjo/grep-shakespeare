

shakeseare = 'pg100.txt'
out = {}

def extract(file):
	for line in file:
		strip()

def strip(arr):
	arr(lambda x: 
		x.replace(/[^a-zA-Z ]/g,'') 
		add(x)
	)

def add(word):
	if !out[word]:
		out[word] = 1
	else:
		out[word] += out[word]

with f as open():
	extract(f)

print(out)