var shakespeare = 'pg100.txt',
	data = '',
	result = 'result.json'
	;

var extract = function(file, cb){
	var rl = require('readline').createInterface({
		input: fs.createReadStream(path.join('./data',file));
	});

	rl.on('line',function(line){
		cb(line);
	});

	rl.on('close',function(arr){
		console.log('done');
	});
};

var transform(line,cb){
	var words = line.split(' ');

	console.log(words);

	cb();
};

extract(shakespeare,function(line){
	transform(line,function(result){
		console.log(result);
	});
});

