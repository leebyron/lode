#!/bin/bash

pushd iosevka
# git restore .
# git apply ../iosevka.patch
node ../gen-build-plans.js > private-build-plans.toml
# ln -fs ../private-build-plans.toml private-build-plans.toml
# npm install
npm run build -- super-ttc::Lode super-ttc::LodeDark webfont::Lode webfont::LodeDark
# npm run build -- ttc::Lode
cp dist/{Lode,LodeDark}/WOFF2/* ../docs/woff
