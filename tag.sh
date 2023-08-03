#!/bin/bash


VERSION=`git describe --tags --abbrev=0 | awk -F. '{OFS="."; $NF+=1; print $0}'`
git tag -a $VERSION -m "Version Update"
git push origin $VERSION
