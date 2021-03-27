#!/bin/bash

rm -rf ../node_modules/
rm -rf node_modules/
rm -rf ios/Pods
rm -rf ios/LibrarySample.xcworkspace

yarn install

cd ios
pod install
