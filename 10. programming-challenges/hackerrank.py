#!/bin/python3
import sys

# n = int(input().strip())
arr = [5,4,4,2,2,9]
# arr = [int(arr_temp) for arr_temp in input().strip().split(' ')]

# print(
# 	stuff(arr)
# )

def cut(arr):
	size = min(num for num in arr if num != 0)
	above_1 = len(list(filter(
		lambda num: num if num > 0 else 0
		,arr)))
	arr = list(map(
			lambda num: num - size if num - size > 0 else 0
		, arr))
	print(above_1)
	if all(num == 0 for num in arr):
		return None
	else: 
		cut(arr)

cut(arr)

# print(times)


# size=[1,2,3]

# n,t = input().strip().split(' ')
# arr = map(int, input().strip().split(' ') )

# for i, lane_width in enumerate(arr):
# 	last_car_entry = -1
# 	last_truck_entry = -1

# 	if lane_width > 1:


# width = [int(width_temp) for width_temp in input().strip().split(' ')]
# for line in range(t):
#     entry,exit = input().strip().split(' ')
#     entry,exit = [int(entry),int(exit)]
#     minimum = width[i]



# args = int(input().strip())




# def squares_between(start,finish):
# 	result=0
# 	for num in range(finish):
# 		if (num**2 > start and num**2 <= finish):
# 			result+=1
# 	print(result)
# 	return result


# for line in range(args):
# nums = list([3,9])
# nums = list([17,24])
	# nums = list(input().split())

# squares_between( int(nums[0]) , int(nums[1]) )


# def fibonacci(a,b,n):
# 	if(n==0):
# 		return b
# 	else:
# 		return fibonacci(b,b**2+a,n-1)

# x=raw_input()
# x=x.split()

# print( fibonacci( int(x[0]) , int(x[1]) , int(x[2]) - 2 ) )

# def decide(num):
# 	result=''
# 	if(num < 10):
# 		result='YES'
# 	print(result)
# 	return result

# decide(5)

# print('YES' if len([i for i in a if i<0])<k else 'NO')


# def decent(n):
# 	five = '5', three = '3'
# 	while(true):
# 		three+=three
# 	while(n>0):
# 		if(n%3 == 0):
# 			break
# 		else:
# 			n -= 5
# 	return n

# decent(3)

# def growth_cycles(n):
# 	result = 0
# 	if(n == 0):
# 		result = 1
# 	elif(n % 2 == 0):
# 		result = int(2 ** (((n+2) / 2)+1)-1)
# 	elif(n % 2 ==1):
# 		result = int(2 ** ((n + 3)/2) - 2)
# 	return result
# 	# else:
# 	# 	return n + growth_cycles(n-1)

# print(
# 	growth_cycles(4)
# 	)

# def digit(num):
# 	s = list(str(num))
# 	s = list(map(lambda digit: int(digit),s))
# 	result = []

# 	for iterator,digit in enumerate(s):
# 		if(digit == 0):
# 			break
# 		elif(num % digit == 0):
# 			result.append(1)

# 	return len(result)

# print(digit(1012))










