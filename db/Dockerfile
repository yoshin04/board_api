FROM mysql:5.7
RUN touch /var/log/mysql/mysqld.log
RUN { \
  echo '[mysqld]'; \
  echo 'character-set-server=utf8mb4'; \
  echo 'collation-server=utf8mb4_general_ci'; \
  echo '[client]'; \
  echo 'default-character-set=utf8mb4'; \
  } > /etc/mysql/conf.d/charset.cnf
EXPOSE 3306