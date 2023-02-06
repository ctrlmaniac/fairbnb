#!/bin/sh

STATICDIR=server/src/main/resources/static

for dir in $STATICDIR/*;
do
  [ "$dir" = "$STATICDIR/media" ] && continue
  rm -rfv "$dir"
done

cp -a www/dist/. $STATICDIR/