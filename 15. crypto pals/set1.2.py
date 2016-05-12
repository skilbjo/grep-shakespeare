# Goal - convert hex to base64
string = '1c0111001f010100061a024b53535009181c'

xor = '686974207468652062756c6c277320657965'

result = '746865206b696420646f6e277420706c6179'

def convert_hex_base64(string):
	return string


if __name__ == '__main__':
	if ( convert_hex_base64(string) == result):
		print('passed!')
	else:
		print('keep trying')

