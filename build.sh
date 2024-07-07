#!/bin/bash -e

# Overwrite changes, fail in CI.
if ! git -C iosevka diff --quiet; then
  [ ! -t 0 ] && exit 1
  echo "Changes detected."
  choice=""
  while [[ ! "$choice" =~ ^[123]$ ]]; do
    read -p "1) Overwrite. 2) Adopt. 3) Ignore (1/2/3): " choice
  done
  if [[ "$choice" == "1" ]]; then
    echo "Restoring and applying patch..."
    git -C iosevka restore .
    git -C iosevka apply ../iosevka.patch
  elif [[ "$choice" == "2" ]]; then
    echo "Creating and applying new patch..."
    source get-patch.sh
  fi # Note: any other option ignores.
else
  echo "Applying patch..."
  git -C iosevka apply ../iosevka.patch
fi

echo "Generating build plans..."
node gen-build-plans.js > iosevka/private-build-plans.toml

echo "Installing dependencies..."
npm --prefix iosevka ci --silent --prefer-offline

echo "Running build..."
if [ -n "${LODE_BUILD_FAST:-}" ]; then
  npm --prefix iosevka run build -- webfont::Lode webfont::LodeDark
else
  npm --prefix iosevka run build -- super-ttc::Lode super-ttc::LodeDark webfont::Lode webfont::LodeDark webfont::LodeTerm webfont::LodeDarkTerm
fi

echo "Preparing dist..."
rm -rf dist
mkdir -p dist
cp iosevka/dist/.super-ttc/* dist
cp iosevka/dist/*/WOFF2/* dist

mkdir -p docs/woff2
cp dist/*.woff2 docs/woff2

echo "Build completed."
