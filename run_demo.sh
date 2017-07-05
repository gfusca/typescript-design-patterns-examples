#!/bin/bash
echo "Building $1"
cd ./$1 && tsc demo.ts && cd ..
echo "Running $1 example"
node $1/demo.js
