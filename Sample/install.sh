#!/bin/bash

rm -rf ../node_modules/
rm -rf .git/
rm -rf node_modules/
rm -rf ios/Pods

yarn install

cd ios
pod install

# Force to update the IQKeyboardManagerSwift fork
pod update IQKeyboardManagerSwift
