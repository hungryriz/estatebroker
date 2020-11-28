# ... do some setup ...
# then run the CMD passed as command-line arguments
# mv /var/laravel/* /var/www/html/
rm composer.lock && rm -rf vendor/ && composer install

php-fpm

