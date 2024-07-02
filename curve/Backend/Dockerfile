FROM debian:bullseye

RUN apt-get -y update && apt-get -y upgrade

RUN apt-get install -y python3 && apt-get install -y python3-pip

RUN pip install --upgrade pip

COPY . /Project

RUN pip install -r Project/Packages/requirements.txt

WORKDIR /Project/Tools

RUN chmod +x /Project/Tools/run_django_app.sh

#Temporary to test some things for the future
EXPOSE 4444 

ENTRYPOINT ["/bin/bash", "/Project/Tools/run_django_app.sh"]