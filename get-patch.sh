#!/bin/bash

pushd iosevka
git apply --check ../iosevka.patch 2>/dev/null && git apply ../iosevka.patch
git diff HEAD > ../iosevka.patch
