FROM mysql:latest

ENV MYSQL_DATABASE=CostaLingua \
    MYSQL_ROOT_PASSWORD=root

ADD schema.sql /docker-entrypoint-initdb.d

#EXPOSE 3306