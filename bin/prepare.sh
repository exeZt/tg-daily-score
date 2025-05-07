#!/usr/bin/bash


if [ `command -v sqlite3` ]; then
  bash lib/create-database.sh;
else
  apt-get install sqlite3
fi;

