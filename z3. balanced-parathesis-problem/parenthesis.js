var data = '((blah)))'
	;

var balanced_parenthesis = function(str){
	var count=0;

	str = str.split('');

	str.map(function(char){
		if(char=='(') count+=1;
		if(char==')') count-=1;
	});

	if(count===0){
		return 'balanced!';
	} else {
		return 'unbalanced :(';
	}

};

console.log(balanced_parenthesis(data));