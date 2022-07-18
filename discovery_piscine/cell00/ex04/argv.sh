#!/bin/bash

if [ $# -eq 0 ]
then
	echo "No arguments provided"
	exit 1
fi
if [ -n "$1" ]
then
	echo $1
fi
if [ -n "$2" ]
then
	echo $2
fi
if [ -n "$3" ]
then
	echo $3
fi
