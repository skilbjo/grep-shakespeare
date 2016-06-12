#!/usr/bin/env python3
import binascii, codecs

def occurances(string):
	result = {}
	for char in string:
		if not result[char]:
			result[char] = 1
		else:
			result[char] += 1
	return result

def xor(string,key):
	hex = bytes.fromhex(string)
	key = codecs.encode('hex')
	# key = bytes.fromhex(key)
	result = ''
	result_hex = ''

	for hex_char,key_char in zip(hex,key):
		result += chr( ord( chr(hex_char) ) ^ ord( chr(key_char) ) )

	print(result)
	result_hex = str(binascii.hexlify(result.encode('utf-8')),'ascii')
	return result_hex

def test(fn,goal,xor,target):
	print('goal: ',goal)
	print('target: ',target)
	if( fn(goal,xor) == target):
		print('passed!')
	else:
		print('keep trying')

def main():
	string = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736'
	alphabet = list(map(chr, range(97,123)))

	# xor(string,'c')
	for char in alphabet:
		xor(string,char)

	# test(fixed_xor,string,xor,result)


if __name__ == '__main__':
	main()
