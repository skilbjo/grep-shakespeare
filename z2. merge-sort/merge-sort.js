var data = [6,5,3,1,8,7,2,4]
	;

var merge_sort = function(list){
	var sorted_list = [],
		middle = (list.length - 1) / 2,
		i = 0, j = 0
		;

	if(list.length == 1) return list;

	var left = merge_sort(list.slice(0,middle)),
		right = merge_sort(list.slice(middle,list.length-1))
		;


	while(i < list.length && j < list.length){
		if(left[i] > right[j]) {
			sorted_list.push(right[j]);
			j+=1;
		} else {
			sorted_list.push(left[i]);
			i+=1;
		}
	}

	sorted_list+=left.slice(i,left.length-1);
	sorted_list+=right.slice(j,right.length-1);

	return sorted_list;

};


console.log(merge_sort(data));

