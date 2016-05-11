var fs = require('fs'),
	l_path = require('path')
	;

var directory_recursion = function(path){
	var file = fs.lstatSync(path),
		json = {
			path: path,
			name: l_path.basename(path)
		}
		;

	if(file.isDirectory()){
		json.type='folder';
		json.children= fs.readdirSync(path).map(function(child){
			return directory_recursion(path+'/'+child);
		});
	} else {
		json.type='file';
	}

	return JSON.stringify(json,null,4);
};

console.log(
	directory_recursion('./root')
);