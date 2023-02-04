#!/bin/sh

if [ -f server/src/main/resources/media/csv/immagini.csv ];
then
  rm server/src/main/resources/media/csv/immagini.csv
fi

touch server/src/main/resources/media/csv/immagini.csv


for img in server/src/main/resources/static/media/appartamenti/*;
do
  echo "/media/appartamenti/${img##*/}" >> server/src/main/resources/media/csv/immagini.csv
done