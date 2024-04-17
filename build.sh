#!/bin/bash

git submodule update --init --depth 1 iosevka
pushd iosevka
git apply --check ../iosevka.patch 2>/dev/null && git apply ../iosevka.patch
ln -fsw ../private-build-plans.toml private-build-plans.toml
npm install
npm run build -- super-ttc::Lode
