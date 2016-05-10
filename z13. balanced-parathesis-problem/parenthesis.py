data = '(blah))'

def balanced_parenthesis(str):
	count=0
	if(len(str) == 0):
		print('need to pass in a string')
		return

	for char in str:
		if char == '(':
			count+=1
		if char == ')':
			count-=1

	if(count != 0):
		return 'unbalanced!'
	else:
		return 'balanced!'




if __name__ == '__main__':
	print(balanced_parenthesis(data))
