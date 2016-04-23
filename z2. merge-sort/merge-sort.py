# data = [6,5,3,1,8,7,2,4]
import random
data = [random.randint(0,900) for number in range(0,90)]

def merge_sort(list):
	sorted_list = []
	middle = int(len(list)/2)
	i = 0
	j = 0

	if len(list) == 1:
		return list

	left = merge_sort(list[:middle])
	right = merge_sort(list[middle:])

	while(i < len(left) and j < len(right)):
		if left[i] > right[j]:
			sorted_list.append(right[j])
			j+=1
		else:
			sorted_list.append(left[i])
			i+=1

	sorted_list+=left[i:]
	sorted_list+=right[j:]

	return sorted_list

if __name__ == '__main__':
	print(merge_sort(data))


