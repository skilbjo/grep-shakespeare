#!/bin/bash

## Variable assignment
shakespeare="data/sample.txt"
out="${array[@]}"

## Function declaration
function readfile {
	while read -r line; do
		echo $line
	done < "$1"
	transform
}

function transform {
	# split line into array, 
	# for each item in array remove special characters
	echo transform
	load
}

function load {
	# add each key to 
	echo load
	print
}

function print {
	for i in "${!out[@]}"; do
		echo "{ $i : ${out[$i]} }"
	done
	echo print
}

## Main Program 
readfile $shakespeare

exit 0