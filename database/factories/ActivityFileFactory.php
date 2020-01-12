<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\ActivityFile as ActivityFile;
use Faker\Generator as Faker;

$factory->define(ActivityFile::class, function (Faker $faker) {
    return [
        //
        'path' => 'path/to/imagefile',
        'created_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
        'updated_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
    ];
});