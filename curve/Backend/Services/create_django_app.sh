#!/bin/bash

cd ../Source

if [ ! -f "manage.py" ]; then
  django-admin startproject App .
fi

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver 0.0.0.0:8000

exec "$@"
