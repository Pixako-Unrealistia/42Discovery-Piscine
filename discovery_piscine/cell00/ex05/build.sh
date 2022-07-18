#!/bin/bash

if [ $# -eq 0 ]
then
	echo "No argument provided"
	exit 1
fi
while [[ -n "$1"  ]] 
do
	mkdir "ex$1"
	shift
done
