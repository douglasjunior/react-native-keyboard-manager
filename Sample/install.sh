#!/bin/bash

rm -rf ../node_modules/
rm -rf node_modules/
rm yarn.lock
yarn install
rm -rf node_modules/react-native-keyboard-manager/Sample/
