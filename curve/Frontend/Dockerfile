FROM nginx:latest

RUN apt-get update -y

COPY . /Frontend_Container

RUN chmod -R 755 /Frontend_Container

RUN chmod -R 755 /Frontend_Container/Sources

RUN chmod -R 755 /Frontend_Container/Sources/Media

COPY ./Services/nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]