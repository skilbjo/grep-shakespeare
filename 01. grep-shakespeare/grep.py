import re

shakeseare = './../data/pg100.txt'
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
	if word in out:
		out[word] += 1
	else:
		out[word] = 1

def strip(word):
	return re.sub('[^A-Za-z]', '', word.lower())

def open_file(file):
	with open(file,'r') as f:
		extract(f)

open_file(shakeseare)
print(out)
