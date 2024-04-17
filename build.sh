#!/bin/sh

git submodule update --init --depth 1 iosevka
ln -s private-build-plans.toml iosevka/private-build-plans.toml
pushd iosevka
npm install
npm build -- contents::Lode
