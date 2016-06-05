#!/usr/bin/env python3
import base64

def convert_hex_base64(string):
	hex = bytes.fromhex(string)	#.decode('utf-8')
	base_sixfour = base64.b64encode(hex)
	return base_sixfour.decode()

def test(fn,goal,target):
	print('goal: ',goal)
	print('target: ',target)
	if( fn(goal) == target):
		print('passed!')
	else:
		print('keep trying')

def main():
	# Goal - convert hex to base64
	string = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d'
	result = 'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t'

	test(convert_hex_base64,string,result)


if __name__ == '__main__':
	main()
