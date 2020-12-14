# ... do some setup ...
# then run the CMD passed as command-line arguments
cd /var/www/html/ && rm -rf vendor && composer install && php artisan ui react && php artisan ui react --auth && npm install && npm run dev



php-fpm