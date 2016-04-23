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
	# http://www.linuxjournal.com/content/bash-associative-arrays
	# add each key to 
	echo load
	print
}

function print {
	# http://stackoverflow.com/questions/3112687/how-to-iterate-over-associative-array-in-bash
	for i in "${!out[@]}"; do
		echo "{ $i : ${out[$i]} }"
	done
	echo print
}

## Main Program 
readfile $shakespeare

exit 0