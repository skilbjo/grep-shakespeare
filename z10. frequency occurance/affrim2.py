data = './bible_sample.txt'
result = {}

def store_data(word,next_word = ''):
	if word not in result:
		result[word] = {
			next_word: 1
		}
	else:
		if next_word != '':
			if next_word not in result[word]:
				result[word][next_word] = 1
			else:
				result[word][next_word] += 1

def cleanse(line):
	words = line.split(' ')
	words	= [word.strip('\n.:') for word in words]
	words = [word for word in words if word]
	return words

def read_file(file):
	with open(data,'r') as f:
		for line in f:
			words = cleanse(line)
				
			for index,word in enumerate(words):
				if index == len(words) - 1:
					store_data(word)
				else:
					store_data(word,words[index+1])

def freq_occurrance(word):
	print('Given word for frequency lookup was: "{0}"'.format(word))
	if word not in result:
		return 'Sorry, word not found!'
	total_occurance = 0
	for key,value in result[word].iteritems():
		total_occurance+=value
	for key,value in result[word].iteritems():
		print('Word given was "{0}", and probability of "{1}" occuring next is {2}'.format(word, key, value / (total_occurance * 1.0) ))
	return result[word]


if __name__ == '__main__':
	read_file(data)
	freq_occurrance('of')
