<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Interest;
use Faker\Generator as Faker;

$factory->define(Interest::class, function (Faker $faker) {
    return [
        //
        'name' => $faker->name,
        'description' => 'description',
        'created_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
        'updated_at' => Carbon\Carbon::now()->format('Y-m-d H:i:s'),
    ];
});
