#!/usr/bin/env bash


DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

cd src

for d in */ ; do
    cd $d
    mkdir __tests__
    cd ..
    echo "$d"
done

echo $DIR