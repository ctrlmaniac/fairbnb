#!/bin/sh

if [ -f fairbnb/src/main/resources/media/csv/immagini.csv ];
then
  rm fairbnb/src/main/resources/media/csv/immagini.csv
fi

touch fairbnb/src/main/resources/media/csv/immagini.csv


for img in fairbnb/src/main/resources/static/media/appartamenti/*;
do
  echo "/media/appartamenti/${img##*/}" >> fairbnb/src/main/resources/media/csv/immagini.csv
done