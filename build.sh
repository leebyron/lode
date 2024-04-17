#!/bin/bash

pushd iosevka
git restore .
git apply --check ../iosevka.patch 2>/dev/null && git apply ../iosevka.patch
ln -fs ../private-build-plans.toml private-build-plans.toml
npm install
npm run build -- super-ttc::Lode
