var	fs = require('fs'), path = require('path'), 
	shakespeare = 'pg100.txt',
	out = {},
	// output = 'nodejs.json',
	data = '',
	result = 'result.json'
	;

var strip = function(arr){
	return arr.map(function(item,iterator){
		return item.replace(/[^a-zA-Z ]/g, '');
	});
};

var add = function(words,cb){
	words.map(function(word,iterator){
		if (!out[word]) {
			out[word] = 1;
		} else {
			out[word]+=out[word];
		}		
	});
	cb();
};

var extract = function(file, cb){
	var rl = require('readline').createInterface({
		input: fs.createReadStream(path.join('./../data',file))
	});

	rl.on('line',function(line){
		cb(line);
	});

	rl.on('close',function(arr){
		console.log('done');
		console.log(out);
	});
};

var transform = function(line,cb){
	var words = strip(line.split(' '));

	cb(words);
};

extract(shakespeare,function(line){
	transform(line,function(words){
		add(words,function(){
			// console.log(out);			
		});
	});
});

