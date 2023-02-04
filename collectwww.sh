#!/bin/sh

rm -rf server/src/main/resources/static/assets
rm server/src/main/resources/static/index.html
cp -r www/dist server/src/main/resources/static