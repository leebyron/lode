#!/bin/bash

git -C iosevka apply --check iosevka.patch 2>/dev/null && git -C iosevka apply iosevka.patch
git -C iosevka diff HEAD > iosevka.patch
