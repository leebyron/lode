#!/bin/sh

git submodule update --init --depth 1 iosevka
pushd iosevka
npm install
npm build -- contents::Lode
