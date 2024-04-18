#!/bin/bash

pushd iosevka
# git restore .
# git apply ../iosevka.patch
# ln -fs ../private-build-plans.toml private-build-plans.toml
# npm install
npm run build -- super-ttc::Lode
# npm run build -- ttc::Lode
