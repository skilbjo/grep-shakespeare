node = './root'

def directory_recursion(node):
	node = stats_on_node #library?
	json = {
		path: node,
		name: node.name #syntax?
	}

	if(node.isDirectory()):
		json.type = 'folder'
		json.children = file.map(node, lambda child: directory_recursion(node+'/'+child))
	else:
		json.type = 'file'
	print(json)



if __name__ == '__main__':
	directory_recursion(node)
