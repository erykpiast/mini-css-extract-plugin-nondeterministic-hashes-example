#!/usr/bin/env bash

DIRS=("dir1" "dir2" "dir3")

for DIR in "${DIRS[@]}"; do
    rm -rf "$DIR"
    mkdir "$DIR"
    cp -R src "$DIR/"
    cp package.json "$DIR/"
    cp package-lock.json "$DIR/"
    cp webpack.config.js "$DIR"
    cd "$DIR"
    npm ci
    npm run build
    cd ..
done;

ls -d -1 dir?/dist/main_*.css
ls -d -1 dir?/dist/main_*.js
