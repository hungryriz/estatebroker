FROM nginx:alpine

# Copy composer.lock and composer.json
#COPY composer.lock composer.json /var/www/

# Set working directory
WORKDIR /var/www/html
RUN apk update
RUN apk add nano
RUN apk add vim

# installing an netstat is not necessary, but is handy
RUN apk add net-tools

# openssl is the only required thing to install
RUN apk add openssl