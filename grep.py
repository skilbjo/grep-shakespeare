import re

shakeseare = './data/pg100.txt'
out = dict()

def extract(file):
	for line in file:
		transform(line)
	file.close()

def transform(line):
	words = line.split()
	words = list(map(lambda x: strip(x), words))
	load(words)

def load(row):
	map(lambda x: add(x), row)

def add(word):
	print(word)
	if word in out:
		out[word] += 1
	else:
		out[word] = 0
	  # out[word] = out.get(word, 0) + 1
	# if !out[word]:
	# 	out[word] = 1
	# else:
	# 	out[word] += out[word]

def strip(word):
	return re.sub('[^A-Za-z]', '', word.lower())

def open_file(file):
	with open(file,'r') as f:
		extract(f)

open_file(shakeseare)

# def add(word):
# 	if !out[word]:
# 		out[word] = 1
# 	else:
# 		out[word] += out[word]

# print(out)