#!/usr/bin/env python3
import base64
import binascii

def fixed_xor(string,xor):
	hex = bytes.fromhex(string)
	xor = bytes.fromhex(xor)
	xor_d = ''
	xor_dd = ''

	for char1,char2 in zip(hex,xor):
		xor_d += chr( ord( chr(char1) ) ^ ord( chr(char2) ) )

	print(xor_d)
	xor_dd = str(binascii.hexlify(xor_d.encode('utf-8')),'ascii')
	return xor_dd

def test(fn,goal,xor,target):
	print('goal: ',goal)
	print('target: ',target)
	if( fn(goal,xor) == target):
		print('passed!')
	else:
		print('keep trying')

def main():
	# Goal - convert hex to base64
	string = '1c0111001f010100061a024b53535009181c'
	result = '746865206b696420646f6e277420706c6179'
	xor = '686974207468652062756c6c277320657965'

	test(fixed_xor,string,xor,result)


if __name__ == '__main__':
	main()
