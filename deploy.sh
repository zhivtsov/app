#!/bin/bash

npm run build

cd build

git init

git add .

git commit -m -h

git remote add origin https://github.com/zhivtsov/app.git

git push -f origin HEAD:build

cd ..

rm -rf build
