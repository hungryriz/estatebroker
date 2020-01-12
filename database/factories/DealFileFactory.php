<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\DealFile;
use Faker\Generator as Faker;

$factory->define(DealFile::class, function (Faker $faker) {
    return [
        //
        'path' => 'path/to/file',
    ];
});
