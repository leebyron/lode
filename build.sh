#!/bin/bash

pushd iosevka
ln -s ../private-build-plans.toml private-build-plans.toml
npm install
npm run build -- contents::Lode
