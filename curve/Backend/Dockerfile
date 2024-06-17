FROM debian:bullseye

RUN apt-get -y update && apt-get -y upgrade

RUN apt-get install -y python3 && apt-get install -y python3-pip

RUN pip install --upgrade pip

COPY . /Project

WORKDIR /Project/Services

RUN pip install -r requirements.txt

WORKDIR /Project/Services

RUN chmod +x create_django_app.sh

ENTRYPOINT [ "./create_django_app.sh" ]