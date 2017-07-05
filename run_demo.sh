#!/bin/bash
echo "> Building examples..."

npm run build

echo "> Running $1 demo..."

node build/$1/demo.js
