var graph = [
	['#','o','#'],
	['#','o','o'],
	['#','o','#']
];

var printRoute = function(coordinates){
	coordinates.forEach(function(coord){
		var row = coord[0], col = coord[1];
		console.log(graph[row][col]);
	});
};

var dijkstra = function(graph){
	var route = [];

	graph.forEach(function(row,row_index){
		row.forEach(function(col,col_index){
			if(col == 'o') route.push([row_index,col_index]);
		});
	});
	return route;
};

console.log(
	printRoute(dijkstra(graph))
);

/*
	1. start at an initial node
	2. assign every node a tentative distance value. set it to 0 for initial node, infinity for all other nodes
	3. set initial node as current. mark all other nodes as unvisited in an unvisted set.
	4. for current node, consider all of its unvisited neighbors and calculate tentative distance.
	5. mark the current node as visited and remove it from unvisited set. 
	6. if desitination node has been visited, stop
	7. otherwise, mark the node with the smallest tentative distance as current and go back to step 3
*/