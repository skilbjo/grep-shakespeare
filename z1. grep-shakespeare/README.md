# grep shakespeare

Grep Shakespeare in `node.js`, `python`, and pure `bash`.

## Problem

Read the Shakespearian texts, and return every unique word with the number of occurances.

Resulting data structure is `json`:

````
[{
	"thy": 4,
	"thou": 17
}]
````

## Dataset
- `http://www.gutenberg.org/cache/epub/100/pg100.txt`

## Useful commands 
- `head -n 500 pg100.txt >> sample.txt`