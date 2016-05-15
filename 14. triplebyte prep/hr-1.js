/*
| Network          | IIN (Prefix)                       | Length     |
| American Express | 34, 37                             | 15         |
| Diner's Club     | 38, 39                             | 14         |
*/

var detectNetwork = function(cardNumber) {
	var IIN = ((cardNumber+'').slice(0,2))*1,
		network = ''
		;

	switch(IIN){
		case 34:
		case 35:
		case 36:
		case 37:
			network = 'American Express'; break;
		case 38:
		case 39:
			network = 'Diner\'s Club'; break;
	}

	return network;
};

console.log(
	detectNetwork(3803132132)
);