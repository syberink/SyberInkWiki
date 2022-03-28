#!/usr/bin/env sh

# upload 'syber.ink.ico.svg' this '/images/icons/':https://realfavicongenerator.net
# get URLfile.zip : https://realfavicongenerator.net/files/.../favicon_package_v0.16.zip
# Usage : yarn icons URLfile.zip

# 确保脚本抛出遇到的错误
set -e
mkdir -p .vuepress/public/images/icons
cd .vuepress/public/images/icons

# copy syber.ink.logo.svg/ico.svg
cp ../../../../*.svg ../../

wget $1 -O icons.zip
unzip icons.zip
rm -rf icons.zip
convert android-chrome-512x512.png  -resize  384x384 android-chrome-384x384.png
cp favicon.ico ../../