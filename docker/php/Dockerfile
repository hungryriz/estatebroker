FROM php:7.2-fpm

# Copy composer.lock and composer.json
#COPY composer.lock composer.json /var/www/

# Set working directory
WORKDIR /var/www/html

# ARG GIT_HUB_REPOSITORY
# ARG GIT_HUB_USER
# ARG GIT_HUB_TOKEN

# Install dependencies
RUN echo "Acquire::Check-Valid-Until \"false\";\nAcquire::Check-Date \"false\";" | cat > /etc/apt/apt.conf.d/10no--check-valid-until
RUN apt-get update -y
RUN apt-get install -y \
        libzip-dev \
        zip \
  && docker-php-ext-configure zip --with-libzip \
  && docker-php-ext-install zip
RUN apt-get update -y && apt-get install -y sendmail libpng-dev
RUN apt-get update -y \
    && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl \
    libwebp-dev \
    apt-utils \
    nodejs \
    npm \
    yarn
# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install extensions
RUN docker-php-ext-install pdo_mysql mbstring zip exif pcntl
RUN docker-php-ext-configure gd --with-gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ --with-png-dir=/usr/include/ --with-webp-dir=/usr/include/ 
RUN docker-php-ext-install gd
# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer


# Copy existing application directory contents

COPY . /var/www/html
# RUN mkdir /var/laravel
RUN composer self-update --1
# RUN cp -r /var/www/html/* /var/laravel/ && cd /var/laravel && rm -rf vendor && composer install
# Add user for laravel application && composer install
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www
RUN chown -R www:www /var/www/
USER www
#RUN ["chmod", "+x", "./docker-entrypoint.sh"]

# Copy existing application directory permissions
# COPY --chown=laravel:laravel . /var/www

# Expose port 9010 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
 

#ENTRYPOINT ["sh","./docker/php/docker-entrypoint.sh"]