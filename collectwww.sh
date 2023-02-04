#!/bin/sh

rm -rf server/src/main/resources/static/assets
rm server/src/main/resources/static/index.html
cp -r www/dist/index.html server/src/main/resources/static/index.html
cp -r www/dist/assets server/src/main/resources/static/assets