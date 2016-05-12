# Goal - convert hex to base64
string = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d'

result = 'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t'

def convert_hex_base64(string):
	return string


if __name__ == '__main__':
	if ( convert_hex_base64(string) == result):
		print('passed!')
	else:
		print('keep trying')
