#!/bin/bash

# Check if manage.py exists in the current directory

cd ../Server

python3 manage.py makemigrations
python3 manage.py migrate

python3 manage.py runserver 0.0.0.0:4444

# if [ -f "manage.py" ]; then
#     # Run Django migrations
#     python3 manage.py makemigrations
#     python3 manage.py migrate

#     # Start Django development server on localhost:4444
#     python3 manage.py runserver 0.0.0.0:4444
# else
#     echo "manage.py not found. Are you in the correct directory?"
#     exit 1
# fi